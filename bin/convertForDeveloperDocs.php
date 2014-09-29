<?php

require(__DIR__ . '/../vendor/autoload.php');

use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\ArgvInput;

$defaultDataSrc = __DIR__ . '/../apidoc/api_data.json';

try {
    $inputDefinition = new InputDefinition(array(
        new InputOption('data-src', 's', InputOption::VALUE_OPTIONAL, 'Location of apidoc data.json file', $defaultDataSrc),
        new InputOption('data-target', 't', InputOption::VALUE_OPTIONAL, 'Where to write json output', null)
    ));

    $input = new ArgvInput($argv, $inputDefinition);

    $dataSrc = $input->getOption('data-src');
    $dataTarget = $input->getOption('data-target');

    $targetStream = ($dataTarget === null) ? 'php://stdout' : 'file://' . $dataTarget;
    $targetHandle = fopen($targetStream, 'r+');
    
    if($targetHandle === false){
        throw new RuntimeException("Could not write to '$targetStream'");
    }

    $data = loadApiDocData($dataSrc);

    $version = findLatestVersion($data);
    $latestData = extractVersionData($data, $version);
    $outJson = json_encode($latestData, JSON_PRETTY_PRINT);
    
    fwrite($targetHandle, $outJson);
    fclose($targetHandle);
    
    echo PHP_EOL;
} catch (Exception $e) {
    echo $e;
    exit(1);
}

function loadApiDocData($file) {
    if (file_exists($file) === false) {
        throw new InvalidArgumentException('Could not find data src file: ' . $file);
    }

    $json = file_get_contents($file);
    $data = json_decode($json);

    if (empty($data)) {
        throw new InvalidArgumentException('The file: ' . $file . ' does not contain valid JSON');
    }

    return $data;
}

function findLatestVersion(array $data) {
    $version = 0;

    foreach ($data as $object) {
        if (version_compare($object->version, $version, '>')) {
            $version = $object->version;
        }
    }

    return $version;
}

function extractVersionData($data, $version) {
    $thisVersion = array();

    foreach ($data as $object) {
        if ($object->version === $version) {
            array_push($thisVersion, $object);
        }
    }

    return $thisVersion;
}
