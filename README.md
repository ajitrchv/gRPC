# ProtoBuf

Learning google's protocol buffer.

## Syntax
```
syntax = "proto3"

message Account {
    uint32 id = 1;
    string name = 2';
    bool is_verified = 3;
}
```

## Scalar types

### Number
- int32, int64, sint32, sint64
- uint32, uint64
- fixed32, fixed64, sfixed32, sfixed64
- float, double
``` Default value will be zero ```


## Tags
smallest tag is 1
and largest is 536870911
reserved tags 19000 - 19999

tags from 1-15 should be given for most populated tags.


## Repeated fields

Keyword = repeated

```
repeated <type> <name> = <tag>;
```

## Enums

"Custom data type"
Keyword =  Enum
Default value : first value

