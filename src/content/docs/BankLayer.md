---
title: BankLayer
published : 2022-05-18T19:17:51.251Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Returns layer number $1C - Bank Container of mobile.

Normally, that should be a simple constant, not function. But due to backwards compatibility it should be keeped as function.

<br> 
### DWS\Pascal Script:

```pascal
function BankLayer : Byte;
```


DWS\Pascal Script Example:

```pascal
if ObjAtLayer(BankLayer) > 0 then 
  AddToSystemJournal('Bank Box ID: $' + IntToHex(ObjAtLayer(BankLayer),8));
```

### Python:

```python
def BankLayer(): --> ubyte
```
