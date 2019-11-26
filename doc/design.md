# design

## Instances

Instances of design document. Spirit / IP-XACT supports only component instances.

### spirit

```xml
<spirit:componentInstances>
  ...
  <spirit:componentInstance>
    <spirit:instanceName>i_timer</spirit:instanceName>
    <spirit:componentRef
      spirit:vendor="some.org"
      spirit:library="blocks"
      spirit:name="timer"
      spirit:version="1.2.3"
    />
  </spirit:componentInstance>
  ...
</spirit:componentInstances>
```

### ipxact

```xml
<ipxact:componentInstances>
  ...
  <ipxact:componentInstance>
    <ipxact:instanceName>i_timer</ipxact:instanceName>
    <ipxact:componentRef
      vendor="some.org"
      library="blocks"
      name="timer"
      version="1.2.3"
    />
  </ipxact:componentInstance>
  ...
</ipxact:componentInstances>
```

#### DUH

```js
instances: [{
  name: 'i_timer',
  ref: {$ref: 'comp.json5'}
}]
```

### interconnections

#### spirit

```xml
<spirit:interconnections>
  ...
  <spirit:interconnection>
    <spirit:name>interco1</spirit:name>
    <spirit:activeInterface
      spirit:componentRef="i_timers" spirit:busRef="ambaAPB"/>
    <spirit:activeInterface
      spirit:componentRef="i_apbbus" spirit:busRef="MirroredSlave0"/>
  </spirit:interconnection>
  ...
</spirit:interconnections>
```

#### ipxact

```xml
<ipxact:interconnections>
  ...
  <ipxact:interconnection>
    <ipxact:name>interco1</ipxact:name>
    <ipxact:activeInterface
      componentRef="i_timers" busRef="ambaAPB"/>
    <ipxact:activeInterface
      componentRef="i_apbbus" busRef="MirroredSlave0"/>
  </ipxact:interconnection>
  ...
</ipxact:interconnections>
```

#### duh

```js
connections: [{
  name: 'interco1',
  master: {instance: 'i_timers', bus: 'ambaAPB'},
  slave: {instance: 'i_apbbus', bus: 'MirroredSlave0'}
}]
```

### hierConnections

#### spirit

```xml
<spirit:hierConnections>
  ...
  <spirit:hierConnection
    spirit:interfaceRef="TL1">
    <spirit:activeInterface
      spirit:componentRef="xbar0"
      spirit:busRef="tl_i0"/>
  </spirit:hierConnection>
  ...
</spirit:hierConnections>
```

#### ipxact

```xml
<ipxact:interconnections>
  ...
  <ipxact:interconnection>
    <ipxact:name>ExportTL1</ipxact:name>
    <ipxact:activeInterface componentRef="xbar0" busRef="tl_i0"/>
    <ipxact:hierInterface busRef="TL1"/>
  </ipxact:interconnection>
  ...
</ipxact:interconnections>
```

#### duh

```js
connections: [{
  name: 'ExportTL1',
  master: {instance: 'xbar0', bus: 'tl_i0'},
  export: 'TL1'
}]
```

## missmatches

### componentRef

`componentRef` in design document can mean different things.

#### componentInstances.componentInstance.componentRef => object

Instantiation of the component of specific kind referenced in `componentRef` by VLNV.

#### interconnections.interconnections.activeInterfaces.activeInterface.componentRef => string

Component Instance referenced in `componentRef` by name.

#### hierConnections.hierConnection.activeInterface.componentRef => string
