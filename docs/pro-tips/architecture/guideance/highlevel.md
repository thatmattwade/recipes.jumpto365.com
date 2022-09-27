
# High Level Architecture

:::note
This pages is under construction
:::
Micro apps - Make many apps, each solving as few use cases as possible. This give you a better level of control, and lower risk

## Micro Apps
What are micro apps?
A micro app is purposefully designed to accomplish a single, UI-related application task. Rather than rewrite the same piece of user interface for an application, developers can configure an existing micro app to meet their needs. This helps ensure consistency across user interface experiences, and it provides a quick way to extend and customize individual UIs. [Source: www.techtarget.com](https://www.techtarget.com/searchapparchitecture/tip/Micro-apps-vs-microservices-What-developers-should-know)

## Micro Services

## App to App Communication

Power FX have a function which makes it possible for you to read so called query parameters from the URL. 


:::info [Extracted from Microsoft documentation](https://github.com/MicrosoftDocs/power-platform/blob/main/power-platform/power-fx/reference/function-param.md)

The **Param** function retrieves a parameter passed to the app when it was launched. If the named parameter wasn't passed, **Param** returns _blank_.

- When launching a canvas app from another canvas app, use the _Parameter_ arguments to the **Launch** function. Parameter names and values will be automatically URL encoded.
- When launching a canvas app from a web page, add parameters to the [query string](https://en.wikipedia.org/wiki/Query_string) of the [canvas app web link]([#address](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-param#address). This involves adding `&parametername=parametervalue` assuming the query string has already been started for the `tenantId`. For example, adding `&First%20Name=Vicki&category=3` would pass two parameters: `First Name` with a value of `"Vicki"` and `category` with a value of `"3"` (value type is _text_). The parameter name and value must be URL encoded if they contain spaces or special characters, similar to using the [**EncodeURL**](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-encode-decode) function.
- Param names are case-sensitive.
- Param names and values will be automatically URL decoded for use in your app.
- Even if the parameter contains a number, the type returned by **Param** will always be a text string. Conversion to other types will automatically occur or use explicit conversions such as the [**Value**](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-value) function to convert explicitly to a number.

## Syntax

**Launch**( _Address_ [, *ParameterName1*, *ParameterValue1*, ... ] )

- _Address_ – Required. The address of a webpage or the ID of an app to launch.
- _ParameterName(s)_ – Optional. Parameter name.
- _ParameterValue(s)_ – Optional. Corresponding parameter values to pass to the app or the webpage.

**Launch**( _Address_, { [ *ParameterName1*: *ParameterValue1*, ... ] } [, *LaunchTarget* ] )

- _Address_ – Required. The address of a webpage or the ID of an app to launch.
- _ParameterName(s)_ – Optional. Parameter name.
- _ParameterValue(s)_ – Optional. Corresponding parameter values to pass to the app or the webpage.
- _LaunchTarget_ – Optional. A **LaunchTarget** enum value or a custom _name_.

**Param**( _ParameterName_ )

- _ParameterName_ - Required. The name of the parameter passed to the app.

:::

## App to Service Communication

## Service to Service Communication

## Service to App Communication

