---
title: Alarm
published : 2022-05-17T22:11:22.289Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

When called, the icon in the system tray stealth flashes red. After click on stealth tray icon - "alarm" is reset (icon stop flashing).

 
### DWS\Pascal Script:

```pascal
procedure Alarm;
```

DWS\Pascal Script Example:
```pascal
begin
  if Dead then
  begin
    Alarm;
    Halt;
    Disconnect;
  end;
end;
```

### Python:

```python
def Alarm()
```
