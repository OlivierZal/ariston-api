# Ariston API for Node.js

## Enumerations

### Mode

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| `auto` | `1` | [src/types.ts:7](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L7) |
| `manual` | `2` | [src/types.ts:8](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L8) |

***

### OperationMode

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| `auto` | `3` | [src/types.ts:15](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L15) |
| `comfort` | `1` | [src/types.ts:13](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L13) |
| `fast` | `2` | [src/types.ts:14](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L14) |
| `green` | `0` | [src/types.ts:12](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L12) |

***

### Switch

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| `off` | `0` | [src/types.ts:19](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L19) |
| `on` | `1` | [src/types.ts:20](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L20) |

***

### WheType

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| `lydos` | `3` | [src/types.ts:2](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L2) |
| `nuos` | `4` | [src/types.ts:3](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L3) |

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
| ------ | ------ |
| `config` | `object` |
| `config.language`? | `string` |
| `config.logger`? | [`Logger`](README.md#logger) |
| `config.settingManager`? | [`SettingManager`](README.md#settingmanager) |

###### Returns

[`default`](README.md#default)

###### Defined in

[src/lib/AristonAPI.ts:66](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L66)

#### Methods

##### applyLogin()

```ts
applyLogin(data?: LoginCredentials): Promise<boolean>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data`? | [`LoginCredentials`](README.md#logincredentials) |

###### Returns

`Promise`\<`boolean`\>

###### Defined in

[src/lib/AristonAPI.ts:113](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L113)

##### errors()

```ts
errors(id: string): Promise<{
  data: PlantHeader;
}>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `data`: [`PlantHeader`](README.md#plantheader);
 \}\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`PlantHeader`](README.md#plantheader) | [src/lib/AristonAPI.ts:133](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L133) |

###### Defined in

[src/lib/AristonAPI.ts:133](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L133)

##### get()

```ts
get(id: string): Promise<{
  data: GetData<PlantSettings>;
}>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `data`: [`GetData`](README.md#getdatat)\<[`PlantSettings`](README.md#plantsettings)\>;
 \}\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`GetData`](README.md#getdatat)\<[`PlantSettings`](README.md#plantsettings)\> | [src/lib/AristonAPI.ts:138](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L138) |

###### Defined in

[src/lib/AristonAPI.ts:137](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L137)

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

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`Plant`](README.md#plant)[] | [src/lib/AristonAPI.ts:146](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L146) |

###### Defined in

[src/lib/AristonAPI.ts:146](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L146)

##### login()

```ts
login(__namedParameters: LoginPostData): Promise<{
  data: LoginData;
}>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`LoginPostData`](README.md#loginpostdata) |

###### Returns

`Promise`\<\{
  `data`: [`LoginData`](README.md#logindata);
 \}\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`LoginData`](README.md#logindata) | [src/lib/AristonAPI.ts:154](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L154) |

###### Defined in

[src/lib/AristonAPI.ts:150](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L150)

##### report()

```ts
report(id: string): Promise<{
  data: ReportData;
}>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<\{
  `data`: [`ReportData`](README.md#reportdata);
 \}\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`ReportData`](README.md#reportdata) | [src/lib/AristonAPI.ts:167](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L167) |

###### Defined in

[src/lib/AristonAPI.ts:167](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L167)

##### setData()

```ts
setData(id: string, postData: PostData): Promise<{
  data: GetData<null>;
}>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `postData` | [`PostData`](README.md#postdata) |

###### Returns

`Promise`\<\{
  `data`: [`GetData`](README.md#getdatat)\<`null`\>;
 \}\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`GetData`](README.md#getdatat)\<`null`\> | [src/lib/AristonAPI.ts:174](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L174) |

###### Defined in

[src/lib/AristonAPI.ts:171](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L171)

##### setSettings()

```ts
setSettings(id: string, settings: PostSettings): Promise<{
  data: GetSettings;
}>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `settings` | [`PostSettings`](README.md#postsettings) |

###### Returns

`Promise`\<\{
  `data`: [`GetSettings`](README.md#getsettings);
 \}\>

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`GetSettings`](README.md#getsettings) | [src/lib/AristonAPI.ts:184](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L184) |

###### Defined in

[src/lib/AristonAPI.ts:181](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L181)

## Interfaces

### APISettings

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `expires?` | `readonly` | `null` \| `string` | [src/lib/AristonAPI.ts:28](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L28) |
| `password?` | `readonly` | `null` \| `string` | [src/lib/AristonAPI.ts:29](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L29) |
| `username?` | `readonly` | `null` \| `string` | [src/lib/AristonAPI.ts:30](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L30) |

***

### BasePlantData

#### Extended by

- [`PostPlantData`](README.md#postplantdata)
- [`ViewModel`](README.md#viewmodel)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `boostOn?` | `boolean` | [src/types.ts:53](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L53) |
| `comfortTemp?` | `number` | [src/types.ts:54](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L54) |
| `holidayUntil?` | `null` \| `string` | [src/types.ts:55](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L55) |
| `hpState?` | `number` | [src/types.ts:56](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L56) |
| `on?` | `boolean` | [src/types.ts:57](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L57) |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [src/types.ts:58](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L58) |

***

### BasePostSettings\<T\>

#### Extended by

- [`BasePostSettingsWithOld`](README.md#basepostsettingswitholdt)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `new` | `readonly` | `T` | [src/types.ts:95](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L95) |

***

### BasePostSettingsWithOld\<T\>

#### Extends

- [`BasePostSettings`](README.md#basepostsettingst)\<`T`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `new` | `readonly` | `T` | [`BasePostSettings`](README.md#basepostsettingst).`new` | [src/types.ts:95](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L95) |
| `old` | `readonly` | `T` | - | [src/types.ts:99](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L99) |

***

### Failure

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `message` | `readonly` | `string` | [src/types.ts:29](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L29) |
| `ok` | `readonly` | `false` | [src/types.ts:30](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L30) |

***

### GetSettings

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `success` | `readonly` | `boolean` | [src/types.ts:110](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L110) |

***

### HistogramData

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `items` | `readonly` | readonly \{ `x`: `string`; `y`: `number`; \}[] | [src/types.ts:121](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L121) |
| `period` | `readonly` | `string` | [src/types.ts:122](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L122) |
| `series` | `readonly` | `"DhwHp"` \| `"DhwResistor"` | [src/types.ts:123](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L123) |
| `tab` | `readonly` | `string` | [src/types.ts:124](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L124) |

***

### Logger

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `error` | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` | [src/lib/AristonAPI.ts:34](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L34) |
| `log` | `readonly` | (...`data`: `any`[]) => `void`(`message`?: `any`, ...`optionalParams`: `any`[]) => `void` | [src/lib/AristonAPI.ts:35](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L35) |

***

### LoginCredentials

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `password` | `readonly` | `string` | [src/types.ts:34](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L34) |
| `username` | `readonly` | `string` | [src/types.ts:35](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L35) |

***

### LoginPostData

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `email` | `readonly` | `string` | [src/types.ts:39](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L39) |
| `password` | `readonly` | `string` | [src/types.ts:40](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L40) |
| `rememberMe` | `readonly` | `true` | [src/types.ts:41](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L41) |

***

### Plant

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `gw` | `readonly` | `string` | [src/types.ts:47](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L47) |
| `name` | `readonly` | `string` | [src/types.ts:48](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L48) |
| `wheType` | `readonly` | [`WheType`](README.md#whetype) | [src/types.ts:49](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L49) |

***

### PlantData

#### Extends

- `Readonly`\<`Required`\<[`PostPlantData`](README.md#postplantdata)\>\>

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `boostOn` | `readonly` | `boolean` | `Readonly.boostOn` | [src/types.ts:53](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L53) |
| `comfortTemp` | `readonly` | `number` | `Readonly.comfortTemp` | [src/types.ts:54](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L54) |
| `holidayUntil` | `readonly` | `null` \| `string` | `Readonly.holidayUntil` | [src/types.ts:55](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L55) |
| `hpState` | `readonly` | `number` | `Readonly.hpState` | [src/types.ts:56](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L56) |
| `mode` | `readonly` | [`Mode`](README.md#mode) | `Readonly.mode` | [src/types.ts:62](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L62) |
| `on` | `readonly` | `boolean` | `Readonly.on` | [src/types.ts:57](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L57) |
| `opMode` | `readonly` | [`OperationMode`](README.md#operationmode) | `Readonly.opMode` | [src/types.ts:58](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L58) |
| `waterTemp` | `readonly` | `number` | - | [src/types.ts:75](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L75) |

***

### PlantHeader

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `data` | `readonly` | \{ `errorText`: `string`; `errorType`: `number`; \} | [src/types.ts:114](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L114) |
| `data.errorText` | `readonly` | `string` | [src/types.ts:115](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L115) |
| `data.errorType` | `readonly` | `number` | [src/types.ts:116](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L116) |

***

### PlantSettings

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `antilegionellaOnOff` | `readonly` | `boolean` | [src/types.ts:79](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L79) |
| `maxSetpointTemp` | `readonly` | \{ `value`: `number`; \} | [src/types.ts:80](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L80) |
| `maxSetpointTemp.value` | `public` | `number` | [src/types.ts:80](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L80) |
| `minSetpointTemp` | `readonly` | \{ `value`: `number`; \} | [src/types.ts:81](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L81) |
| `minSetpointTemp.value` | `public` | `number` | [src/types.ts:81](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L81) |
| `preHeatingOnOff` | `readonly` | `boolean` | [src/types.ts:82](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L82) |

***

### PostData

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `plantData` | `readonly` | [`PostPlantData`](README.md#postplantdata) | [src/types.ts:70](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L70) |
| `viewModel` | `readonly` | [`ViewModel`](README.md#viewmodel) | [src/types.ts:71](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L71) |

***

### PostPlantData

#### Extends

- [`BasePlantData`](README.md#baseplantdata)

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| `boostOn?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`boostOn` | [src/types.ts:53](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L53) |
| `comfortTemp?` | `number` | [`BasePlantData`](README.md#baseplantdata).`comfortTemp` | [src/types.ts:54](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L54) |
| `holidayUntil?` | `null` \| `string` | [`BasePlantData`](README.md#baseplantdata).`holidayUntil` | [src/types.ts:55](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L55) |
| `hpState?` | `number` | [`BasePlantData`](README.md#baseplantdata).`hpState` | [src/types.ts:56](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L56) |
| `mode?` | [`Mode`](README.md#mode) | - | [src/types.ts:62](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L62) |
| `on?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`on` | [src/types.ts:57](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L57) |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BasePlantData`](README.md#baseplantdata).`opMode` | [src/types.ts:58](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L58) |

***

### PostSettings

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `SlpAntilegionellaOnOff?` | [`BasePostSettingsWithOld`](README.md#basepostsettingswitholdt)\<[`Switch`](README.md#switch)\> | [src/types.ts:103](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L103) |
| `SlpMaxSetpointTemperature?` | [`BasePostSettings`](README.md#basepostsettingst)\<`number`\> | [src/types.ts:104](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L104) |
| `SlpMinSetpointTemperature?` | [`BasePostSettings`](README.md#basepostsettingst)\<`number`\> | [src/types.ts:105](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L105) |
| `SlpPreHeatingOnOff?` | [`BasePostSettingsWithOld`](README.md#basepostsettingswitholdt)\<[`Switch`](README.md#switch)\> | [src/types.ts:106](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L106) |

***

### ReportData

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `data` | `readonly` | \{ `asKwhRaw`: \{ `histogramData`: readonly [`HistogramData`](README.md#histogramdata)[]; \}; \} | [src/types.ts:128](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L128) |
| `data.asKwhRaw` | `readonly` | \{ `histogramData`: readonly [`HistogramData`](README.md#histogramdata)[]; \} | [src/types.ts:129](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L129) |
| `data.asKwhRaw.histogramData` | `readonly` | readonly [`HistogramData`](README.md#histogramdata)[] | [src/types.ts:129](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L129) |

***

### SettingManager

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `get` | \<`K`\>(`key`: `K`) => `undefined` \| `null` \| [`APISettings`](README.md#apisettings)\[`K`\] | [src/lib/AristonAPI.ts:39](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L39) |
| `set` | \<`K`\>(`key`: `K`, `value`: [`APISettings`](README.md#apisettings)\[`K`\]) => `void` | [src/lib/AristonAPI.ts:42](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/lib/AristonAPI.ts#L42) |

***

### Success

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `message` | `readonly` | `null` | [src/types.ts:24](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L24) |
| `ok` | `readonly` | `true` | [src/types.ts:25](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L25) |

***

### ViewModel

#### Extends

- [`BasePlantData`](README.md#baseplantdata)

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| `boostOn?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`boostOn` | [src/types.ts:53](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L53) |
| `comfortTemp?` | `number` | [`BasePlantData`](README.md#baseplantdata).`comfortTemp` | [src/types.ts:54](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L54) |
| `holidayUntil?` | `null` \| `string` | [`BasePlantData`](README.md#baseplantdata).`holidayUntil` | [src/types.ts:55](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L55) |
| `hpState?` | `number` | [`BasePlantData`](README.md#baseplantdata).`hpState` | [src/types.ts:56](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L56) |
| `on?` | `boolean` | [`BasePlantData`](README.md#baseplantdata).`on` | [src/types.ts:57](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L57) |
| `opMode?` | [`OperationMode`](README.md#operationmode) | [`BasePlantData`](README.md#baseplantdata).`opMode` | [src/types.ts:58](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L58) |
| `plantMode?` | [`Mode`](README.md#mode) | - | [src/types.ts:66](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L66) |

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

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`PlantSettings`](README.md#plantsettings) \| `null` |

#### Defined in

[src/types.ts:85](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L85)

***

### LoginData

```ts
type LoginData: Failure | Success;
```

#### Defined in

[src/types.ts:44](https://github.com/OlivierZal/ariston-api/blob/39ba01411a48c2a993f9e1b91ee5b9cddeb1aaee/src/types.ts#L44)
