---
title: GetAutoBuyDelay
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

 

Returns value of delay, which used after buy through [AutoBuy](../AutoBuy) or [AutoBuyEx](../AutoBuyEx)
Default value is 3 ms

**Pascal Syntax:**

```pascal
function GetAutoBuyDelay : Word;
```

Pascal Example:
```pascal
if GetAutoBuyDelay > 1000 then
  SetAutoBuyDelay(50);

```

**Python Syntax:**
```python
def GetAutoBuyDelay(): --> ushort
```
