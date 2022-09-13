---
sidebar_position: 2
---

Requires .NET5 or greater SDK to be installed

https://d365demystified.com/2021/04/13/enable-custom-code-components-pcf-controls-to-be-imported-in-a-canvas-power-app-quick-tip/

![](https://i.imgur.com/lpn0HSe.png)

```powershell
pac pcf push --publisher-prefix prod --verbosity normal
```

I was required to lift the permissions on the environment, then it worked. The following might help you in finding the minimal permissions set.

https://docs.microsoft.com/en-us/power-platform/admin/database-security#minimum-privileges-to-run-an-app

```
Connected to...Nets (EU Datacenter)     
Using full update.
Building the temporary solution wrapper.
|
Packing D:\code\IFrameVirtualPCF\obj\PowerAppsTools_prod\obj\Debug\Metadata to bin\Debug\PowerAppsTools_prod.zip

Processing Component: Entities
Processing Component: Roles
Processing Component: Workflows
Processing Component: FieldSecurityProfiles
Processing Component: Templates
Processing Component: EntityMaps
Processing Component: EntityRelationships
Processing Component: OrganizationSettings
Processing Component: optionsets
Processing Component: CustomControls
 - ReactVirtual.IFrameVirtualPCF
Processing Component: SolutionPluginAssemblies
Processing Component: EntityDataProviders

Unmanaged Pack complete.

Building temporary solution wrapper: done.
Dropping temporary solution wrapper zip file: done.
  File at D:\code\IFrameVirtualPCF\obj\PowerAppsTools_prod\bin\Debug\PowerAppsTools_prod.zip.
Importing the temporary solution wrapper into the current org.
Solution Importing...
Importing the temporary solution wrapper into the current org: done.
Updating the control in the current org: done.

```

