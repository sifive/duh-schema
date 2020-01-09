
### 2009

```xml
<spirit:busInterface>
  <spirit:name>...</spirit:name>
  <spirit:busType spirit:vendor="..." spirit:library="..." spirit:name="..." spirit:version="..."/>
  <spirit:abstractionType spirit:vendor="..." spirit:library="..." spirit:name="..." spirit:version="..."/>
  <spirit:slave/>
  <spirit:portMaps>
    <spirit:portMap>
      <spirit:logicalPort>
        <spirit:name>CLK</spirit:name>
      </spirit:logicalPort>
      <spirit:physicalPort>
        <spirit:name>clk</spirit:name>
      </spirit:physicalPort>
    </spirit:portMap>
  </spirit:portMaps>
</spirit:busInterface>
```

### 2014

```xml
<ipxact:busInterface>
  <ipxact:name>...</ipxact:name>
  <ipxact:busType vendor="..." library="..." name="..." version="..."/>
  <ipxact:abstractionTypes>
    <ipxact:abstractionType>
      <ipxact:viewRef>RTLview</ipxact:viewRef>
      <ipxact:abstractionRef vendor="..." library="..." name="..." version="...">
        <ipxact:configurableElementValues>
          <ipxact:configurableElementValue referenceId="...">0</ipxact:configurableElementValue>
        </ipxact:configurableElementValues>
      </ipxact:abstractionRef>
      <ipxact:portMaps>
        <ipxact:portMap>
          <ipxact:logicalPort>
            <ipxact:name>Data</ipxact:name>
          </ipxact:logicalPort>
          <ipxact:physicalPort>
            <ipxact:name>mst_data</ipxact:name>
          </ipxact:physicalPort>
        </ipxact:portMap>
        <ipxact:portMap>
      </ipxact:portMaps>
    </ipxact:abstractionType>
  </ipxact:abstractionTypes>
</ipxact:busInterface>
```
