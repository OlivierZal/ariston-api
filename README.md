# Ariston API for Node.js

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
new default(config: {
  "language": string;
  "logger": Logger;
  "settingManager": SettingManager;
 }): default
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | `object` |
| `config.language`? | `string` |
| `config.logger`? | [`Logger`](README.md#logger) |
| `config.settingManager`? | [`SettingManager`](README.md#settingmanager) |

###### Returns

[`default`](README.md#default)

###### Source

[src/lib/AristonAPI.ts:67](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L67)

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

[src/lib/AristonAPI.ts:114](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L114)

##### errors()

```ts
errors(id: string): Promise<{
  "data": PlantHeader;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `"data"`: [`PlantHeader`](README.md#plantheader);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`PlantHeader`](README.md#plantheader) |

###### Source

[src/lib/AristonAPI.ts:130](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L130)

##### getDataWithSettings()

```ts
getDataWithSettings(id: string): Promise<{
  "data": GetDataFailure | GetDataWithSettingsSuccess;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `"data"`: [`GetDataFailure`](README.md#getdatafailure) \| [`GetDataWithSettingsSuccess`](README.md#getdatawithsettingssuccess);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetDataFailure`](README.md#getdatafailure) \| [`GetDataWithSettingsSuccess`](README.md#getdatawithsettingssuccess) |

###### Source

[src/lib/AristonAPI.ts:134](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L134)

##### list()

```ts
list(): Promise<{
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

[src/lib/AristonAPI.ts:143](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L143)

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

[src/lib/AristonAPI.ts:147](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L147)

##### report()

```ts
report(id: string): Promise<{
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

[src/lib/AristonAPI.ts:156](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L156)

##### setData()

```ts
setData(id: string, postData: PostData): Promise<{
  "data": GetDataFailure | GetDataSuccess;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `postData` | [`PostData`](README.md#postdata) |

###### Returns

`Promise`\<\{
  `"data"`: [`GetDataFailure`](README.md#getdatafailure) \| [`GetDataSuccess`](README.md#getdatasuccess);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetDataFailure`](README.md#getdatafailure) \| [`GetDataSuccess`](README.md#getdatasuccess) |

###### Source

[src/lib/AristonAPI.ts:160](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L160)

##### setSettings()

```ts
setSettings(id: string, settings: PostSettings): Promise<{
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

[src/lib/AristonAPI.ts:170](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/lib/AristonAPI.ts#L170)

## Interfaces

### APISettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `expires?` | `readonly` | `null` \| `string` |
| `password?` | `readonly` | `null` \| `string` |
| `username?` | `readonly` | `null` \| `string` |

***

### BaseGetData

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `message` | `readonly` | `null` \| `string` |
| `ok` | `readonly` | `boolean` |

***

### BasePlantData

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

### Data\<T\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`PlantSettings`](README.md#plantsettings) \| `null` |

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `plantData` | `readonly` | [`PlantData`](README.md#plantdata) |
| `plantSettings` | `readonly` | `T` |

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

### PlantData

#### Extends

- `Readonly`\<`Required`\<[`PostPlantData`](README.md#postplantdata)\>\>

#### Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `boostOn` | `readonly` | `boolean` | `Readonly.boostOn` |
| `comfortTemp` | `readonly` | `number` | `Readonly.comfortTemp` |
| `holidayUntil` | `readonly` | `null` \| `string` | `Readonly.holidayUntil` |
| `mode` | `readonly` | [`Mode`](README.md#mode) | `Readonly.mode` |
| `on` | `readonly` | `boolean` | `Readonly.on` |
| `opMode` | `readonly` | [`OperationMode`](README.md#operationmode) | `Readonly.opMode` |
| `waterTemp` | `readonly` | `number` | - |

***

### PlantHeader

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `readonly` | \{ `"errorText"`: `null` \| `string`; `"errorType"`: `null` \| `number`; \} |
| `data.errorText` | `public` | `null` \| `string` |
| `data.errorType` | `public` | `null` \| `number` |

***

### PlantSettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `antilegionellaOnOff` | `readonly` | `boolean` |
| `maxSetpointTemp` | `readonly` | \{ `"value"`: `number`; \} |
| `maxSetpointTemp.value` | `readonly` | `number` |
| `minSetpointTemp` | `readonly` | \{ `"value"`: `number`; \} |
| `minSetpointTemp.value` | `public` | `number` |
| `preHeatingOnOff` | `public` | `boolean` |

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

- [`BasePlantData`](README.md#baseplantdata)

#### Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `boostOn?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`boostOn` |
| `comfortTemp?` | `number` | [`BasePlantData`](README.md#baseplantdata).`comfortTemp` |
| `holidayUntil?` | `null` \| `string` | [`BasePlantData`](README.md#baseplantdata).`holidayUntil` |
| `mode?` | [`Mode`](README.md#mode) | - |
| `on?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`on` |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BasePlantData`](README.md#baseplantdata).`opMode` |

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

- [`BasePlantData`](README.md#baseplantdata)

#### Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `boostOn?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`boostOn` |
| `comfortTemp?` | `number` | [`BasePlantData`](README.md#baseplantdata).`comfortTemp` |
| `holidayUntil?` | `null` \| `string` | [`BasePlantData`](README.md#baseplantdata).`holidayUntil` |
| `on?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`on` |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BasePlantData`](README.md#baseplantdata).`opMode` |
| `plantMode?` | [`Mode`](README.md#mode) | - |

## Type Aliases

### GetDataFailure

```ts
type GetDataFailure: BaseGetData & Failure;
```

#### Source

[src/types.ts:98](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/types.ts#L98)

***

### GetDataSuccess

```ts
type GetDataSuccess: BaseGetData & Data<null> & Success;
```

#### Source

[src/types.ts:96](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/types.ts#L96)

***

### GetDataWithSettingsSuccess

```ts
type GetDataWithSettingsSuccess: BaseGetData & Data<PlantSettings> & Success;
```

#### Source

[src/types.ts:100](https://github.com/OlivierZal/ariston-api/blob/ece69cc6ef550813fda8958572b6c33dffdb345c/src/types.ts#L100)
