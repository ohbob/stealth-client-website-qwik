---
title: BpackLayer
published : 2022-05-18T19:17:51.80Z
author: Vizit0r
summary: API
layout: blog
---

 

Returns layer number $15 - Character's Bag (Backpack).

The result of the ObjAtLayer(BpackLayer) should be similar to [Backpack](../Backpack)

Normally, that should be a simple constant, not function. But due to backwards compatibility it should be keeped as function.

 ### DWS\Pascal Script:

```pascal
function BpackLayer : Byte;
```

DWS\Pascal Script Example:

```pascal
if ObjAtLayer(BpackLayer) > 0 then 
  AddToSystemJournal('Backpack ID: $' + IntToHex(ObjAtLayer(BpackLayer),8));
```


### Python:

```python
def BpackLayer(): --> ubyte
```
