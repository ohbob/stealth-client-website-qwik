---
title: AddGumpIgnoreByID
published : 2022-05-17T22:11:22.997Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

Add ID to GumpIgnore list, so incoming gumps with this ID will be ignored.

**NB**: Some shards have unique IDs for each gumps, some not. You have to check your shards gumps. Maybe on your shard gumps has only unique Serials, and you will use [AddGumpIgnoreBySerial](Api/AddGumpIgnoreBySerial).  

**NB 2**: Dont forget, that ignoring Gump is not cancel it! For server it looks like Gump received and shown by client, so server *can* wait for some gump response. So, be careful with ignore methods.
### Params:

  *ID* : Gump ID to be ignored.


<br> 
### DWS\Pascal Script:

```pascal
procedure AddGumpIgnoreByID(ID : Cardinal);
```


### Python:

```python
def AddGumpIgnoreByID(ID)
```
