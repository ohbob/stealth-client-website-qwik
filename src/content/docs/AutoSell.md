---
title: AutoSell
published : 2022-05-18T19:17:51.812Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Applying for present sell lists, or set the hook for next incoming sell lists.

This hook works until removed, NOT once!

For hook removing need to set AutoSell with "Quantity" param = 0.


### Params:

  *ItemType* : Type of Object. Can be a number (numerical or hex) (-1 or $FFFF for any type) OR name of type in TypesCollection (**DWS only** - read more about [Collections](Api/Collections)) 

  *ItemColor* : Number (numerical or hex). Use $FFFF or -1 for any color.

  *Quantity* : Number (numerical or hex). If set $FFFF or -1 - maximum amount from shop list will be used.  If "Quantity" less than amount in sell list, then using "Quantity", else using amount from sell list.


<br>

### Pascal Script:

```pascal
procedure AutoSell(ItemType : Word; ItemColor : Word; Quantity : Word);
```

### DWS:

```pascal
procedure AutoSell(ItemType : [Word, String]; ItemColor : Word; Quantity : Word)ж
```

DWS\Pascal Script Example:

```pascal
AutoSell($E21,$FFFF,40); //sell 40 items with type $E21, any color
```


### Python:

```python
def AutoSell(ItemType, ItemColor, Quantity)
```
