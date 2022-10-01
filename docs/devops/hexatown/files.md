---
sidebar_position: 2
---
# File structure

Hexatown is designed to become a shard resources on the file system so it installs it self in the **ProgramData** folder in a subdirectory called **hexatown.com**

## hexatown.com

#### .env
The .env file contains environment variables which will be setup when the hexa CLI starts

```text title=".env"
APPCLIENT_ID=52e441d8-0a47-4654-93d9-71d068649c2c
APPCLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
APPCLIENT_DOMAIN=df96b8c9-51a1-40cf-b8b1-4514be8e9668
SITEURL=https://365adm.sharepoint.com/sites/RecipeMakers
AADDOMAIN=production
DEVELOP=1
POWERBRICKDISTRO=https://hexatownnets.blob.core.windows.net/powerbricks?sp=racwdl&st=2021-02-26T10:20:22Z&se=2099-02-26T18:20:22Z&spr=https&sv=2020-02-10&sr=c&sig=XXXXXXXXXXXX

```

## hexatown.com/.hexatown
```
files.txt
h.ps1
hexa.ps1
hexatown.cmd
hexatown.ps1
hexatree.ps1
hx.ps1
hxt.ps1
img
InstallPackage.ps1
modules
package.json
src
t.ps1
x.ps1
xt.ps1
```
## hexatown.com/.hexatown/modules
```
modules\PsISEProjectExplorer
modules\PSReadLine
modules\PsISEProjectExplorer\1.5.0
modules\PsISEProjectExplorer\1.5.0\Lucene.Net.dll
modules\PsISEProjectExplorer\1.5.0\Mono.Cecil.dll
modules\PsISEProjectExplorer\1.5.0\NLog.config
modules\PsISEProjectExplorer\1.5.0\NLog.dll
modules\PsISEProjectExplorer\1.5.0\nunit.engine.api.dll
modules\PsISEProjectExplorer\1.5.0\nunit.engine.dll
modules\PsISEProjectExplorer\1.5.0\NUnit3.TestAdapter.dll
modules\PsISEProjectExplorer\1.5.0\PSGetModuleInfo.xml
modules\PsISEProjectExplorer\1.5.0\PsISEProjectExplorer.dll
modules\PsISEProjectExplorer\1.5.0\PsISEProjectExplorer.psd1
modules\PsISEProjectExplorer\1.5.0\PsISEProjectExplorer.psm1
modules\PsISEProjectExplorer\1.5.0\PsISEProjectExplorerPS5.dll
modules\PsISEProjectExplorer\1.5.0\SimpleInjector.dll
modules\PSReadLine\2.1.0
modules\PSReadLine\2.1.0\Changes.txt
modules\PSReadLine\2.1.0\License.txt
modules\PSReadLine\2.1.0\Microsoft.PowerShell.PSReadLine2.dll
modules\PSReadLine\2.1.0\PSGetModuleInfo.xml
modules\PSReadLine\2.1.0\PSReadLine.cat
modules\PSReadLine\2.1.0\PSReadLine.format.ps1xml
modules\PSReadLine\2.1.0\PSReadLine.psd1
modules\PSReadLine\2.1.0\PSReadLine.psm1
modules\PSReadLine\2.1.0\SamplePSReadLineProfile.ps1
modules\PSReadLine\2.1.0\System.Runtime.InteropServices.RuntimeInformation.dll
```
## hexatown.com/.hexatown/src/bin

```
src\bin\jq-win32.exe
src\bin\jq-win64.exe
```
## hexatown.com/.hexatown/jobs/powershell
```
src\jobs\powershell
src\jobs\powershell\.hexatown.com.ps1
src\jobs\powershell\.schema.json
src\jobs\powershell\api.ps1
src\jobs\powershell\index.ps1
src\jobs\powershell\myteams.ps1
src\jobs\powershell\readme.md
```

## hexatown.com/.hexatown/src/pages
```
src\pages\file-explorer.ps1
src\pages\hexatown-logo-128h.png
src\pages\icon.ico
src\pages\intro.ps1
src\pages\Niels 2021 Prof Headshot 1080 p border.png
src\pages\Niels 2021 Proff Head shot.png
src\pages\NIELS HEXATOWN.png
src\pages\NIELS PowerBricks.png
src\pages\select-sharepoint-site.ps1
```

