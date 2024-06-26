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
  language: string;
  logger: Logger;
  settingManager: SettingManager;
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

[src/lib/AristonAPI.ts:66](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L66)

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

[src/lib/AristonAPI.ts:113](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L113)

##### errors()

```ts
errors(id: string): Promise<{
  data: PlantHeader;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `data`: [`PlantHeader`](README.md#plantheader);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`PlantHeader`](README.md#plantheader) |

###### Source

[src/lib/AristonAPI.ts:133](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L133)

##### get()

```ts
get(id: string): Promise<{
  data: GetData<PlantSettings>;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `data`: [`GetData`](README.md#getdatat)\<[`PlantSettings`](README.md#plantsettings)\>;
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetData`](README.md#getdatat)\<[`PlantSettings`](README.md#plantsettings)\> |

###### Source

[src/lib/AristonAPI.ts:137](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L137)

##### list()

```ts
list(): Promise<{
  data: Plant[];
}>
```

###### Returns

`Promise`\<\{
  `data`: [`Plant`](README.md#plant)[];
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`Plant`](README.md#plant)[] |

###### Source

[src/lib/AristonAPI.ts:146](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L146)

##### login()

```ts
login(__namedParameters: LoginPostData): Promise<{
  data: LoginData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`LoginPostData`](README.md#loginpostdata) |

###### Returns

`Promise`\<\{
  `data`: [`LoginData`](README.md#logindata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`LoginData`](README.md#logindata) |

###### Source

[src/lib/AristonAPI.ts:150](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L150)

##### report()

```ts
report(id: string): Promise<{
  data: ReportData;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `data`: [`ReportData`](README.md#reportdata);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`ReportData`](README.md#reportdata) |

###### Source

[src/lib/AristonAPI.ts:167](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L167)

##### setData()

```ts
setData(id: string, postData: PostData): Promise<{
  data: GetData<null>;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `postData` | [`PostData`](README.md#postdata) |

###### Returns

`Promise`\<\{
  `data`: [`GetData`](README.md#getdatat)\<`null`\>;
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetData`](README.md#getdatat)\<`null`\> |

###### Source

[src/lib/AristonAPI.ts:171](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L171)

##### setSettings()

```ts
setSettings(id: string, settings: PostSettings): Promise<{
  data: GetSettings;
}>
```

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `settings` | [`PostSettings`](README.md#postsettings) |

###### Returns

`Promise`\<\{
  `data`: [`GetSettings`](README.md#getsettings);
 \}\>

| Member | Type |
| :------ | :------ |
| `data` | [`GetSettings`](README.md#getsettings) |

###### Source

[src/lib/AristonAPI.ts:181](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/lib/AristonAPI.ts#L181)

## Interfaces

### APISettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `expires?` | `readonly` | `null` \| `string` |
| `password?` | `readonly` | `null` \| `string` |
| `username?` | `readonly` | `null` \| `string` |

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
| `hpState?` | `number` |
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

### Failure

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `message` | `readonly` | `string` |
| `ok` | `readonly` | `false` |

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
| `items` | `readonly` | readonly \{ `x`: `string`; `y`: `number`; \}[] |
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
| `hpState` | `readonly` | `number` | `Readonly.hpState` |
| `mode` | `readonly` | [`Mode`](README.md#mode) | `Readonly.mode` |
| `on` | `readonly` | `boolean` | `Readonly.on` |
| `opMode` | `readonly` | [`OperationMode`](README.md#operationmode) | `Readonly.opMode` |
| `waterTemp` | `readonly` | `number` | - |

***

### PlantHeader

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `data` | `readonly` | \{ `errorText`: `string`; `errorType`: `number`; \} |
| `data.errorText` | `public` | `string` |
| `data.errorType` | `public` | `number` |

***

### PlantSettings

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `antilegionellaOnOff` | `readonly` | `boolean` |
| `maxSetpointTemp` | `readonly` | \{ `value`: `number`; \} |
| `maxSetpointTemp.value` | `readonly` | `number` |
| `minSetpointTemp` | `readonly` | \{ `value`: `number`; \} |
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
| `hpState?` | `number` | [`BasePlantData`](README.md#baseplantdata).`hpState` |
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
| `data` | `readonly` | \{ `asKwhRaw`: \{ `histogramData`: readonly [`HistogramData`](README.md#histogramdata)[]; \}; \} |
| `data.asKwhRaw` | `public` | \{ `histogramData`: readonly [`HistogramData`](README.md#histogramdata)[]; \} |
| `data.asKwhRaw.histogramData` | `public` | readonly [`HistogramData`](README.md#histogramdata)[] |

***

### SettingManager

#### Properties

| Property | Type |
| :------ | :------ |
| `get` | \<`K`\>(`key`: `K`) => `undefined` \| `null` \| [`APISettings`](README.md#apisettings)\[`K`\] |
| `set` | \<`K`\>(`key`: `K`, `value`: [`APISettings`](README.md#apisettings)\[`K`\]) => `void` |

***

### Success

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `message` | `readonly` | `null` |
| `ok` | `readonly` | `true` |

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
| `hpState?` | `number` | [`BasePlantData`](README.md#baseplantdata).`hpState` |
| `on?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`on` |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BasePlantData`](README.md#baseplantdata).`opMode` |
| `plantMode?` | [`Mode`](README.md#mode) | - |

## Type Aliases

### GetData\<T\>

```ts
type GetData<T>: Failure | Success & {
  data: {
     plantData: PlantData;
     plantSettings: T;
    };
};
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`PlantSettings`](README.md#plantsettings) \| `null` |

#### Source

[src/types.ts:85](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/types.ts#L85)

***

### LoginData

```ts
type LoginData: Failure | Success;
```

#### Source

[src/types.ts:44](https://github.com/OlivierZal/ariston-api/blob/6b95adea94b34cf1e7dbf8822700ccb86521fec0/src/types.ts#L44)
