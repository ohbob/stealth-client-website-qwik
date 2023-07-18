---
title: AddGumpIgnoreBySerial
published : 2022-05-17T22:11:22.344Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Add Serial to GumpIgnore list, so incoming gumps with this Serial will be ignored.

**NB**: Some shards have unique Serials for each gumps, some not. You have to check your shards gumps. Maybe on your shard gumps has only unique IDs, and you will use [AddGumpIgnoreByID](Api/AddGumpIgnoreByID).  

**NB 2**: Dont forget, that ignoring Gump is not cancel it! For server it looks like Gump received and shown by client, so server *can* wait for some gump response. So, be careful with ignore methods.

### Params:

  *Serial* : Gump Serial to be ignored.


<br> 
### DWS\Pascal Script:

```pascal
procedure AddGumpIgnoreBySerial(Serial : Cardinal);
```


### Python:

```python
def AddGumpIgnoreBySerial(Serial)
```
