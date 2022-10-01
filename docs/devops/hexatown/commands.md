---
sidebar_position: 2
---
# Commands


## UI
    UI  { & "$PSScriptRoot\src\pages\file-explorer.ps1" }

## DIST    
    DIST  { GoDistro }

## GET    
    GET  { DownloadAndInstall $arg1 }

## DIR  
    DIR  { Invoke-Expression "explorer ." }

## DEMO    
    DEMO { Start-Hexatown-Demo $arg1}

## VERSION    
    VERSION { Show-Hexatown-Version }

## HELP    
    HELP { ShowHelp $arg1 }

## INIT    
    INIT { Init $path $arg1 $arg2 $arg3 }

## SELF

## HOME
## DATA
## POP
## INSTALL
## ZIPENV

## POWERBRICK (PB)

## REGISTER

## GO

## LIST
    POWERBRICK {
        powerbrick $path $arg1 $arg2 

