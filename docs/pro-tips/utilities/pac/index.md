# Download, Unpack and Pack Canvas Apps
Microsoft Power Platform CLI is a simple, one-stop developer CLI that empowers developers and ISVs to perform various operations in Microsoft Power Platform related to environment lifecycle, authentication, and work with Microsoft Dataverse environments, solution packages, portals, code components, and so on.

:::info 
This page is mend to be my internal notes, so it is pretty techy. Will not try to explain the details, use it as source for inspiration. And this **has only been tested on Windows**
:::

## Preparation

### Install PAC
[Install](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction#power-platform-cli-for-windows)

### Install PowerShell modules
This will be a one time operation

```powershell title="install.ps1"
Save-Module -Name Microsoft.PowerApps.Administration.PowerShell -Path $PSScriptRoot 
Save-Module -Name Microsoft.PowerApps.PowerShell -Path $PSScriptRoot 

```

### Load PowerShell modules

```powershell title="load.ps1"
Import-Module -Name (join-path $PSScriptRoot  "Microsoft.PowerApps.Administration.PowerShell") -DisableNameChecking
Import-Module -Name (join-path $PSScriptRoot  "Microsoft.PowerApps.PowerShell") -DisableNameChecking 
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 


```

### Sign in to PowerApps

```powershell 
Add-PowerAppsAccount
```
## Actions

### List environments

```powershell
pac admin list
```

```text
Environment          Environment Id                       Environment Url                          Type       Organization Id
365Admin (default)   df96b8c9-51a1-40cf-b8b1-4514be8e9668 https://org637f10da.crm4.dynamics.com/   Default    57ba3645-7558-4687-aa76-91d8a017bb5a
Center of Excellence da3d703a-b11d-4319-99d5-cc50608c694a https://jumpto365-coe.crm4.dynamics.com/ Production f0008d4a-7852-4703-80fc-0dd19851a84c
Contoso Electronics  a1447d3e-71ac-4013-820f-2dfe0b595157 https://org358b9d36.crm4.dynamics.com/   Teams      1888393c-9809-47b8-bf87-473aa4210f55
Development          070d3a1f-0248-425f-82b2-871a4787053d https://org4c8617e9.crm4.dynamics.com/   Production 9f514232-090f-4c45-a591-e4ab732197e1
Hus projekt          bae33a20-c8ce-4c8f-ac7d-2cb408630ebd https://org656cf411.crm4.dynamics.com/   Teams      456d4ccf-a4de-43f1-bd27-e6be76506128
Jumpto365            d2e5d9cb-3f2b-4a4a-86c9-b0f1e6a9ce3c https://jumpto365.crm4.dynamics.com/     Production fbd7d4a9-359f-40c6-870d-6a14c09786ab
Protected EU         450d5d27-b834-47c0-a96c-59ac7bfbf162 https://orgf8d8a144.crm4.dynamics.com/   Production 4e4fc304-6114-4494-8d97-335316e42d87

```
### Download PowerApp
```powershell
Get-AdminPowerApp "*Recipe Design*" | ft
```
```text
AppName                              DisplayName                     CreatedTime                  Owner
-------                              -----------                     -----------                  -----
776f81a0-7ea0-4f70-a2e5-7ca367f4bbff Recipe Design Guide - Base Pack 2022-09-20T08:10:55.6405319Z @{id=58d02ee5-af80-4f... 
d6bc58ce-4451-44e5-8d2d-68b6f3592282 Recipe Design Guide             2021-10-18T10:02:24.9298552Z @{id=58d02ee5-af80-4f... 

```

```powershell
Get-AdminPowerApp d6bc58ce-4451-44e5-8d2d-68b6f3592282 | convertto-json -Depth 8
```
```json
{
    "AppName":  "d6bc58ce-4451-44e5-8d2d-68b6f3592282",
    "DisplayName":  "Recipe Design Guide",
    "CreatedTime":  "2021-10-18T10:02:24.9298552Z",
    "Owner":  {
                  "id":  "58d02ee5-af80-4f81-b144-1734b77c02c9",
                  "displayName":  "Niels Gregers Johansen",
                  "email":  "niels@365admin.net",
                  "type":  "User",
                  "tenantId":  "df96b8c9-51a1-40cf-b8b1-4514be8e9668",
                  "userPrincipalName":  "niels@365admin.net"
              },
    "LastModifiedTime":  "2022-09-29T14:00:49.4862893Z",
    "EnvironmentName":  "070d3a1f-0248-425f-82b2-871a4787053d",
    "UnpublishedAppDefinition":  null,
    "IsFeaturedApp":  false,
    "IsHeroApp":  false,
    "BypassConsent":  false,
    "Internal":  {
                     "name":  "d6bc58ce-4451-44e5-8d2d-68b6f3592282",
                     "id":  "/providers/Microsoft.PowerApps/scopes/admin/environments/070d3a1f-0248-425f-82b2-871a4787053d/apps/d6bc58ce-4451-44e5-8d2d-68b6f3592282",
                     "type":  "Microsoft.PowerApps/scopes/admin/apps",
                     "tags":  {
                                  "primaryDeviceWidth":  "1918",
                                  "primaryDeviceHeight":  "986",
                                  "supportsPortrait":  "true",
                                  "supportsLandscape":  "true",
                                  "primaryFormFactor":  "Tablet",
                                  "publisherVersion":  "3.22091.11",
                                  "minimumRequiredApiVersion":  "2.2.0",
                                  "hasComponent":  "true",
                                  "hasUnlockedComponent":  "true",
                                  "isUnifiedRootApp":  "false",
                                  "sienaVersion":  "20220926T120415Z-3.22091.11.0"
                              },
                     "properties":  {
                                        "appVersion":  "2022-09-26T12:04:15Z",
                                        "createdByClientVersion":  {
                                                                       "major":  3,
                                                                       "minor":  22091,
                                                                       "build":  11,
                                                                       "revision":  0,
                                                                       "majorRevision":  0,
                                                                       "minorRevision":  0
                                                                   },
                                        "minClientVersion":  {
                                                                 "major":  3,
                                                                 "minor":  22091,
                                                                 "build":  11,
                                                                 "revision":  0,
                                                                 "majorRevision":  0,
                                                                 "minorRevision":  0
                                                             },
                                        "owner":  {
                                                      "id":  "58d02ee5-af80-4f81-b144-1734b77c02c9",
                                                      "displayName":  "Niels Gregers Johansen",
                                                      "email":  "niels@365admin.net",
                                                      "type":  "User",
                                                      "tenantId":  "df96b8c9-51a1-40cf-b8b1-4514be8e9668",
                                                      "userPrincipalName":  "niels@365admin.net"
                                                  },
                                        "createdBy":  {
                                                          "id":  "58d02ee5-af80-4f81-b144-1734b77c02c9",
                                                          "displayName":  "Niels Gregers Johansen",
                                                          "email":  "niels@365admin.net",
                                                          "type":  "User",
                                                          "tenantId":  "df96b8c9-51a1-40cf-b8b1-4514be8e9668",
                                                          "userPrincipalName":  "niels@365admin.net"
                                                      },
                                        "lastModifiedBy":  {
                                                               "id":  "58d02ee5-af80-4f81-b144-1734b77c02c9",
                                                               "displayName":  "Niels Gregers Johansen",
                                                               "email":  "niels@365admin.net",
                                                               "type":  "User",
                                                               "tenantId":  "df96b8c9-51a1-40cf-b8b1-4514be8e9668",        
                                                               "userPrincipalName":  "niels@365admin.net"
                                                           },
                                        "backgroundColor":  "rgba(0, 176, 240, 1)",
                                        "backgroundImageUri":  "https://pafeblobprodam.blob.core.windows.net:443/20220926t000000zf2dc137cecec4d1099c3984b08d888cf/logoSmallFile?sv=2018-03-28\u0026sr=c\u0026sig=f5tI02hn4HtWd7xTx%2F%2FDncG0UWVJn%2FLDM%2BleF1DehTY%3D\u0026se=2022-11-24T10%3A07%3A31Z\u0026sp=rl",
                                        "teamsColorIconUrl":  "https://pafeblobprodam.blob.core.windows.net:443/20220926t000000z1926e2dd81f74d44856374a13dd2a511/teamscoloricon.png?sv=2018-03-28\u0026sr=c\u0026sig=S1QBKTjoQ%2F9XmSzWL7de%2Bh631O7435XO6lzVQRrmGGU%3D\u0026se=2022-11-24T10%3A07%3A31Z\u0026sp=rl",
                                        "teamsOutlineIconUrl":  "https://pafeblobprodam.blob.core.windows.net:443/20220926t000000z1926e2dd81f74d44856374a13dd2a511/teamsoutlineicon.png?sv=2018-03-28\u0026sr=c\u0026sig=S1QBKTjoQ%2F9XmSzWL7de%2Bh631O7435XO6lzVQRrmGGU%3D\u0026se=2022-11-24T10%3A07%3A31Z\u0026sp=rl",
                                        "displayName":  "Recipe Design Guide",
                                        "description":  "",
                                        "appUris":  {
                                                        "documentUri":  {
                                                                            "value":  "https://pafeblobprodam.blob.core.windows.net:443/20220926t000000zf2dc137cecec4d1099c3984b08d888cf/document.msapp?sv=2018-03-28\u0026sr=c\u0026sig=IcfGtbZ1PBxUxdfHtmIoSAGm21OOxP3NW%2FgKYS%2FUF7M%3D\u0026se=2022-10-06T08%3A00%3A00Z\u0026sp=rl",
                                                                            "readonlyValue":  "https://pafeblobprodam-secondary.blob.core.windows.net/20220926t000000zf2dc137cecec4d1099c3984b08d888cf/document.msapp?sv=2018-03-28\u0026sr=c\u0026sig=IcfGtbZ1PBxUxdfHtmIoSAGm21OOxP3NW%2FgKYS%2FUF7M%3D\u0026se=2022-10-06T08%3A00%3A00Z\u0026sp=rl"
                                                                        },
                                                        "imageUris":  [

                                                                      ],
                                                        "additionalUris":  [

                                                                           ]
                                                    },
                                        "createdTime":  "2021-10-18T10:02:24.9298552Z",
                                        "lastModifiedTime":  "2022-09-29T14:00:49.4862893Z",
                                        "sharedGroupsCount":  0,
                                        "sharedUsersCount":  2,
                                        "appOpenProtocolUri":  "ms-apps:///providers/Microsoft.PowerApps/apps/d6bc58ce-4451-44e5-8d2d-68b6f3592282",
                                        "appOpenUri":  "https://apps.powerapps.com/play/e/070d3a1f-0248-425f-82b2-871a4787053d/a/d6bc58ce-4451-44e5-8d2d-68b6f3592282?tenantId=df96b8c9-51a1-40cf-b8b1-4514be8e9668\u0026hint=63925a09-9b26-4f5a-be6f-7dcd8c0e0486",
                                        "appPlayUri":  "https://apps.powerapps.com/play/e/070d3a1f-0248-425f-82b2-871a4787053d/a/d6bc58ce-4451-44e5-8d2d-68b6f3592282?tenantId=df96b8c9-51a1-40cf-b8b1-4514be8e9668",
                                        "appPlayEmbeddedUri":  "https://apps.powerapps.com/play/e/070d3a1f-0248-425f-82b2-871a4787053d/a/d6bc58ce-4451-44e5-8d2d-68b6f3592282?tenantId=df96b8c9-51a1-40cf-b8b1-4514be8e9668\u0026hint=63925a09-9b26-4f5a-be6f-7dcd8c0e0486\u0026telemetryLocation=eu",
                                        "appPlayTeamsUri":  "https://apps.powerapps.com/play/e/070d3a1f-0248-425f-82b2-871a4787053d/a/d6bc58ce-4451-44e5-8d2d-68b6f3592282?tenantId=df96b8c9-51a1-40cf-b8b1-4514be8e9668\u0026source=teamstab\u0026hint=63925a09-9b26-4f5a-be6f-7dcd8c0e0486\u0026telemetryLocation=eu\u0026locale={locale}\u0026channelId={channelId}\u0026channelType={channelType}\u0026chatId={chatId}\u0026groupId={groupId}\u0026hostClientType={hostClientType}\u0026isFullScreen={isFullScreen}\u0026entityId={entityId}\u0026subEntityId={subEntityId}\u0026teamId={teamId}\u0026teamType={teamType}\u0026theme={theme}\u0026userTeamRole={userTeamRole}",
                                        "userAppMetadata":  {
                                                                "favorite":  "NotSpecified",
                                                                "includeInAppsList":  false
                                                            },
                                        "isFeaturedApp":  false,
                                        "bypassConsent":  false,
                                        "isHeroApp":  false,
                                        "environment":  {
                                                            "id":  "/providers/Microsoft.PowerApps/environments/070d3a1f-0248-425f-82b2-871a4787053d",
                                                            "name":  "070d3a1f-0248-425f-82b2-871a4787053d",
                                                            "location":  "europe"
                                                        },
                                        "almMode":  "Environment",
                                        "performanceOptimizationEnabled":  true,
                                        "unauthenticatedWebPackageHint":  "63925a09-9b26-4f5a-be6f-7dcd8c0e0486",
                                        "canConsumeAppPass":  true,
                                        "enableModernRuntimeMode":  false,
                                        "executionRestrictions":  {
                                                                      "isTeamsOnly":  false,
                                                                      "dataLossPreventionEvaluationResult":  {
                                                                                                                 "status": 
 "Compliant",
                                                                                                                 "lastEvaluationDate":  "2021-10-18T10:02:40.1436094Z",
                                                                                                                 "violations":  [


     ],
                                                                                                                 "violationsByPolicy":  [


             ],
                                                                                                                 "violationErrorMessage":  "The app uses the following connectors: shared_sharepointonline."
                                                                                                             }
                                                                  },
                                        "appPlanClassification":  "Standard",
                                        "usesPremiumApi":  false,
                                        "usesOnlyGrandfatheredPremiumApis":  true,
                                        "usesCustomApi":  false,
                                        "usesOnPremiseGateway":  false,
                                        "usesPcfExternalServiceUsage":  false,
                                        "isCustomizable":  true
                                    },
                     "appLocation":  "europe",
                     "appType":  "ClassicCanvasApp"
                 }
}
```

```powershell
$appDetails = Get-AdminPowerApp d6bc58ce-4451-44e5-8d2d-68b6f3592282 
$fileUri = $appDetails.Internal.properties.appUris.documentUri.value
$fileName = $appDetails.DisplayName
Invoke-WebRequest -Uri $fileUri -OutFile "download/$filename.msapp" 

```

```text
No output from the command, but you should find the msapp file 
```

d6bc58ce-4451-44e5-8d2d-68b6f3592282.msapp


### Unpack PowerApp

```powershell

pac canvas unpack --msapp '.\download\Recipe Design Guide.msapp' --sources ".\src\Recipe Design Guide"

```

```powershell title="unpack.ps1"

pac canvas unpack --msapp '.\download\Recipe Design Guide.msapp' --sources ".\src\Recipe Design Guide"

```

```text 
Warning: canvas unpack is in preview, and functionality is not guaranteed. Use extreme caution if using in a production environment. For more information see https://aka.ms/paccanvas
Unpack from D:\code\powerapps\src\scripts\powerapps\download\Recipe Design Guide.msapp --> D:\code\powerapps\src\scripts\powerapps\src\Recipe Design Guide
  source format version: 0.24
```

### Pack PowerApp

```powershell title="pack.ps1"

pac canvas pack --msapp "$PSScriptRoot\upload\Recipe Design Guide.msapp" --sources "$PSScriptRoot\src\Recipe Design Guide"

```

```text 
Warning: canvas pack is in preview, and functionality is not guaranteed. Use extreme caution if using in a production environment. For more information see https://aka.ms/paccanvas
Pack from D:\code\powerapps\src\scripts\powerapps\src\Recipe Design Guide --> D:\code\powerapps\src\scripts\powerapps\upload\Recipe Design Guide.msapp
  source format version: 0.24

```

### Extract Catalogue to JSON
```powershell title="extract-catalogue.ps1"
$apps  = Get-AdminPowerApp 

$x = foreach ($app in $apps) {
    @{
        Title       = $app.DisplayName
        Name = $app.Name
        CreatedTime = $app.CreatedTime
        LastModifiedTime= $app.LastModifiedTime
        EnvironmentName  = $app.EnvironmentName
        Owner       = $app.Owner | ConvertTo-Json
        Internal = $app.internal | ConvertTo-Json
    }
} 

$x | convertto-json | Out-File "powerapps2.json"
```

```
```

### Extract Catalogue and Details to JSON
```powershell title="extract-catalogue.ps1"
$apps  = Get-AdminPowerApp 

$x = foreach ($app in $apps) {
    @{
        Title       = $app.DisplayName
        Name = $app.Name
        CreatedTime = $app.CreatedTime
        LastModifiedTime= $app.LastModifiedTime
        EnvironmentName  = $app.EnvironmentName
        Owner       = $app.Owner | ConvertTo-Json
        Internal = $app.internal | ConvertTo-Json
    }
} 

$x | convertto-json | Out-File "powerapps2.json"
```

## Reference

https://github.com/microsoft/PowerApps-Language-Tooling
https://learn.microsoft.com/en-us/power-platform/admin/powerapps-powershell