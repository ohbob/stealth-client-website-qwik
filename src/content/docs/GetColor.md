---
title: GetColor
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Return object color property. If color = 0, than mean Object will have default color(s).

**Pascal Syntax:**

```pascal
function GetColor(ObjID : Cardinal) : Word;
```
Pascal Example:
```pascal
      tmpcolor := GetColor(tmpid); 
      case tmpcolor of 
        $0000 : tmpname := ' a logs'; 
        $07EC : tmpname := ' amarant logs'; 
        $0481 : tmpname := ' frozen logs'; 
        $0497 : tmpname := ' sandwood logs'; 
        $0488 : tmpname := ' oak logs'; 
        $0480 : tmpname := ' ice logs'; 
        $0497 : tmpname := ' sandwood logs'; 
        $049F : tmpname := ' mouldy logs';   
        $0487 : tmpname := ' elven logs'; 
        $0498 : tmpname := ' angelic logs'; 
        $049F : tmpname := ' mouldy logs'; 
        $0485 : tmpname := ' obsidian logs'; 
        $0482 : tmpname := ' ghostwood logs'; 
        $0514 : tmpname := ' solar logs';
        else
          tmpname := ' unknown logs'; 
      end; 
```

**Python Syntax:**
```python
def GetColor(ObjID): --> ushort
```

Python Example:
```py
color_mapping = {
    0x0000: 'a logs',
    0x07EC: 'amarant logs',
    0x0481: 'frozen logs',
    0x0497: 'sandwood logs',
    0x0488: 'oak logs',
    0x0480: 'ice logs',
    0x049F: 'mouldy logs',
    0x0487: 'elven logs',
    0x0498: 'angelic logs',
    0x0485: 'obsidian logs',
    0x0482: 'ghostwood logs',
    0x0514: 'solar logs'
}

tmpcolor = GetColor(tmpid)
tmpname = color_mapping.get(tmpcolor, 'unknown logs')
```
