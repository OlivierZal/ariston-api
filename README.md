# Heatzy API for Node.js

## Enumerations

### Mode

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `1` |
| `manual` | `2` |

***

### OperationMode

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `auto` | `3` |
| `comfort` | `1` |
| `fast` | `2` |
| `green` | `0` |

***

### Switch

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `off` | `0` |
| `on` | `1` |

***

### WheType

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `lydos` | `3` |
| `nuos` | `4` |

## Classes

### default

#### Constructors

##### new default()

```ts
new default(settingManager: SettingManager, logger: Logger): default
```

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `settingManager` | [`SettingManager`](README.md#settingmanager) | `undefined` |
| `logger` | [`Logger`](README.md#logger) | `console` |

###### Returns

[`default`](README.md#default)

###### Source

[src/lib/AristonAPI.ts:57](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L57)

#### Methods

##### applyLogin()

```ts
applyLogin(data?: LoginCredentials): Promise<boolean>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `data`? | [`LoginCredentials`](README.md#logincredentials) |

###### Returns

`Promise`\<`boolean`\>

###### Source

[src/lib/AristonAPI.ts:69](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L69)

##### login()

```ts
login(postData: LoginPostData): Promise<{
  "data": LoginData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `postData` | [`LoginPostData`](README.md#loginpostdata) |

###### Returns

`Promise`\<\{
  `"data"`: [`LoginData`](README.md#logindata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`LoginData`](README.md#logindata) |

###### Source

[src/lib/AristonAPI.ts:88](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L88)

##### plantData()

```ts
plantData(id: string, postData?: PostData): Promise<{
  "data": GetData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `postData`? | [`PostData`](README.md#postdata) |

###### Returns

`Promise`\<\{
  `"data"`: [`GetData`](README.md#getdata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetData`](README.md#getdata) |

###### Source

[src/lib/AristonAPI.ts:97](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L97)

##### plantMetering()

```ts
plantMetering(id: string): Promise<{
  "data": ReportData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `"data"`: [`ReportData`](README.md#reportdata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`ReportData`](README.md#reportdata) |

###### Source

[src/lib/AristonAPI.ts:111](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L111)

##### plantSettings()

```ts
plantSettings(id: string, settings: PostSettings): Promise<{
  "data": GetSettings;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `settings` | [`PostSettings`](README.md#postsettings) |

###### Returns

`Promise`\<\{
  `"data"`: [`GetSettings`](README.md#getsettings);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetSettings`](README.md#getsettings) |

###### Source

[src/lib/AristonAPI.ts:115](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L115)

##### plants()

```ts
plants(): Promise<{
  "data": Plant[];
}>
```

###### Returns

`Promise`\<\{
  `"data"`: [`Plant`](README.md#plant)[];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`Plant`](README.md#plant)[] |

###### Source

[src/lib/AristonAPI.ts:125](https://github.com/OlivierZal/ariston-api/blob/c244c05554a4834cf7f269e0210d05db12bc831a/src/lib/AristonAPI.ts#L125)

## Interfaces

### APISettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `expires?` | `readonly` | `null` \| `string` |
| `password?` | `readonly` | `null` \| `string` |
| `username?` | `readonly` | `null` \| `string` |

***

### BaseData

#### Extended by

- [`PostPlantData`](README.md#postplantdata)
- [`ViewModel`](README.md#viewmodel)

#### Properties

| Property | Type |
| :------ | :------ |
| `boostOn?` | `boolean` |
| `comfortTemp?` | `number` |
| `holidayUntil?` | `null` \| `string` |
| `on?` | `boolean` |
| `opMode?` | [`OperationMode`](README.md#operationmode) |

***

### BasePostSettings\<T\>

#### Extended by

- [`BasePostSettingsWithOld`](README.md#basepostsettingswitholdt)

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `new` | `readonly` | `T` |

***

### BasePostSettingsWithOld\<T\>

#### Extends

- [`BasePostSettings`](README.md#basepostsettingst)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `new` | `readonly` | `T` | [`BasePostSettings`](README.md#basepostsettingst).`new` |
| `old` | `readonly` | `T` | - |

***

### GetData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `readonly` | \{ `"plantData"`: `Readonly`\<`Required`\<[`PostPlantData`](README.md#postplantdata)\>\> & \{ `"procReqTemp"`: `number`; `"waterTemp"`: `number`; \}; `"plantSettings"`: \{ `"antilegionellaOnOff"`: `boolean`; `"maxSetpointTemp"`: \{ `"value"`: `number`; \}; `"minSetpointTemp"`: \{ `"value"`: `number`; \}; `"preHeatingOnOff"`: `boolean`; \}; `"viewModel"`: `Readonly`\<`Required`\<[`ViewModel`](README.md#viewmodel)\>\>; \} |
| `data.plantData` | `public` | `Readonly`\<`Required`\<[`PostPlantData`](README.md#postplantdata)\>\> & \{ `"procReqTemp"`: `number`; `"waterTemp"`: `number`; \} |
| `data.plantSettings?` | `public` | \{ `"antilegionellaOnOff"`: `boolean`; `"maxSetpointTemp"`: \{ `"value"`: `number`; \}; `"minSetpointTemp"`: \{ `"value"`: `number`; \}; `"preHeatingOnOff"`: `boolean`; \} |
| `data.plantSettings.antilegionellaOnOff` | `public` | `boolean` |
| `data.plantSettings.maxSetpointTemp` | `public` | \{ `"value"`: `number`; \} |
| `data.plantSettings.maxSetpointTemp.value` | `public` | `number` |
| `data.plantSettings.minSetpointTemp` | `public` | \{ `"value"`: `number`; \} |
| `data.plantSettings.minSetpointTemp.value` | `public` | `number` |
| `data.plantSettings.preHeatingOnOff` | `public` | `boolean` |
| `data.viewModel` | `public` | `Readonly`\<`Required`\<[`ViewModel`](README.md#viewmodel)\>\> |

***

### GetSettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `success` | `readonly` | `boolean` |

***

### HistogramData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `items` | `readonly` | readonly \{ `"x"`: `string`; `"y"`: `number`; \}[] |
| `period` | `readonly` | `string` |
| `series` | `readonly` | `"DhwHp"` \| `"DhwResistor"` |
| `tab` | `readonly` | `string` |

***

### Logger

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `error` | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` |
| `log` | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` |

***

### LoginCredentials

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `password` | `readonly` | `string` |
| `username` | `readonly` | `string` |

***

### LoginData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `ok` | `readonly` | `boolean` |

***

### LoginPostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `email` | `readonly` | `string` |
| `password` | `readonly` | `string` |
| `rememberMe` | `readonly` | `true` |

***

### Plant

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `gw` | `readonly` | `string` |
| `name` | `readonly` | `string` |
| `wheType` | `readonly` | [`WheType`](README.md#whetype) |

***

### PostData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `plantData` | `readonly` | [`PostPlantData`](README.md#postplantdata) |
| `viewModel` | `readonly` | [`ViewModel`](README.md#viewmodel) |

***

### PostPlantData

#### Extends

- [`BaseData`](README.md#basedata)

#### Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `boostOn?` | `boolean` | [`BaseData`](README.md#basedata).`boostOn` |
| `comfortTemp?` | `number` | [`BaseData`](README.md#basedata).`comfortTemp` |
| `holidayUntil?` | `null` \| `string` | [`BaseData`](README.md#basedata).`holidayUntil` |
| `mode?` | [`Mode`](README.md#mode) | - |
| `on?` | `boolean` | [`BaseData`](README.md#basedata).`on` |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BaseData`](README.md#basedata).`opMode` |

***

### PostSettings

#### Properties

| Property | Type |
| :------ | :------ |
| `SlpAntilegionellaOnOff?` | [`BasePostSettingsWithOld`](README.md#basepostsettingswitholdt)\<[`Switch`](README.md#switch)\> |
| `SlpMaxSetpointTemperature?` | [`BasePostSettings`](README.md#basepostsettingst)\<`number`\> |
| `SlpMinSetpointTemperature?` | [`BasePostSettings`](README.md#basepostsettingst)\<`number`\> |
| `SlpPreHeatingOnOff?` | [`BasePostSettingsWithOld`](README.md#basepostsettingswitholdt)\<[`Switch`](README.md#switch)\> |

***

### ReportData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `readonly` | \{ `"asKwhRaw"`: \{ `"histogramData"`: readonly [`HistogramData`](README.md#histogramdata)[]; \}; \} |
| `data.asKwhRaw` | `public` | \{ `"histogramData"`: readonly [`HistogramData`](README.md#histogramdata)[]; \} |
| `data.asKwhRaw.histogramData` | `public` | readonly [`HistogramData`](README.md#histogramdata)[] |

***

### SettingManager

#### Properties

| Property | Type |
| :------ | :------ |
| `get` | \<`K`\>(`key`: `K`) => `undefined` \| `null` \| [`APISettings`](README.md#apisettings)\[`K`\] |
| `set` | \<`K`\>(`key`: `K`, `value`: [`APISettings`](README.md#apisettings)\[`K`\]) => `void` |

***

### ViewModel

#### Extends

- [`BaseData`](README.md#basedata)

#### Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `boostOn?` | `boolean` | [`BaseData`](README.md#basedata).`boostOn` |
| `comfortTemp?` | `number` | [`BaseData`](README.md#basedata).`comfortTemp` |
| `holidayUntil?` | `null` \| `string` | [`BaseData`](README.md#basedata).`holidayUntil` |
| `on?` | `boolean` | [`BaseData`](README.md#basedata).`on` |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BaseData`](README.md#basedata).`opMode` |
| `plantMode?` | [`Mode`](README.md#mode) | - |