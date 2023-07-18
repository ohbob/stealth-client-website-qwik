---
title: AutoMenu
published : 2022-05-18T19:17:51.201Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Reusable trap for the menu. Works the same as  [WaitMenu](Api/WaitMenu), but runs continuously until removed.

### Params:

  *MenuCaption* :     Can be: 

  1) Full or substring - Menu caption (aka name). Case sesitive!     

  2) '(any') - any menu caption.

  *ElementCaption* : element to use. Can be:
 
  1) string or substring of element. Case sensitive!

  2) '(any)' or '(random)' - random element will be selected

  3) '(X)', where X - some number = index, will be selected Element with this index (if exists). Numeration starts from 1, not from 0 !

  4) '(first)', '(second)', '(last)' = 1st element, 2nd, and last.

  5) '(cancel)' - menu will be cancelled.


<br> 
### DWS\Pascal Script:

```pascal
procedure AutoMenu(MenuCaption : String; ElementCaption : String);
```


DWS\Pascal Script Example:

```pascal
  CancelMenu();
  AutoMenu('Tracking', 'Animals');
  UseSkill('Tracking');
```


### Python:

```python
def AutoMenu(MenuCaption, ElementCaption)
```
