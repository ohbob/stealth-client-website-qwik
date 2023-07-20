---
title: AutoBuy
published : 2022-05-17T22:11:22.143Z
author: Vizit0r
summary: API
layout: blog
---

 

Applying for present buy lists, or set the hook for next incoming buy lists.

This hook works until removed, NOT once!

For hook removing need to set AutoBuy with "Quantity" param = 0.


### Params:

  *ItemType* : Type of Object. Can be a number (numerical or hex) (-1 or $FFFF for any type) OR name of type in TypesCollection (**DWS only** - read more about [Collections](../Collections)) 

  *ItemColor* : Number (numerical or hex). Use $FFFF or -1 for any color.

  *Quantity* : Number (numerical or hex). If set $FFFF or -1 - maximum amount from shop list will be used.  If "Quantity" less than amount in sell list, then using "Quantity", else using amount from buy list.



 ### Pascal Script:

```pascal
procedure AutoBuyEx(ItemType : Word; ItemColor : Word; Quantity : Word)
```

### DWS:

```pascal
procedure AutoBuyEx(ItemType : [Word, String]; ItemColor : Word; Quantity : Word)
```


DWS\Pascal Script Example:

```pascal
AutoBuy(NS,$FFFF,400); //will buy NS reagent of any color, all amount in buy list
```


### Python:

```python
def AutoBuy(ItemType, ItemColor, Quantity)
```
