---
title: SetWalkMountTimer
published: 2020-02-21T21:36:59.459Z
author: Vizit0r
summary: API
layout: blog
---

 

Set delay between steps when walking(not running!) on mount(horse etc) with Move* and Step* functions

Minimal value 190, maximum 2000.

Warning: This delay will be applied to ALL character, loaded in current Stealth instance!

**Pascal Syntax:**

```pascal
procedure SetWalkUnmountTimer(Value: Word);
```

**Python Syntax:**
```python
def SetWalkUnmountTimer(Value):
```