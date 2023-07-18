---
title: Attack
published : 2022-05-17T22:11:22.12Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Attack mobile.

If you are not in War mode, Stealth will switch it on before the attack.

### Params:

  *ObjID* : ID of Object. Can be a number (numerical or hex) OR name of object in ObjectsCollection (**DWS only** - read more about [Collections](Api/Collections))


<br> 
### DWS\Pascal Script:

```pascal
procedure Attack(ObjID : Cardinal);
```


DWS\Pascal Script Example:

```pascal
if (WarTargetID <> Enemy) then
  attack(Enemy);
```



### Python:

```python
def Attack(AttackedID)
```
