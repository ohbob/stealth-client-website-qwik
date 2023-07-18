---
title: AddToSystemJournal
published : 2022-05-17T22:11:22.530Z
author: Vizit0r
summary: API
layout: blog
---

# {title}

**Pascal Script** : Add text line to System Journal.

**DWS** : Can have ANY amount of params, with ANY type. Converts all this to one string line, which finally added to SysJournal.


### Params:
**Pascal Script**

  *Text* : String


**DWS**

  Any amount of params, with any type.


<br> 
### Pascal Script:

```pascal
procedure AddToSystemJournal(Text : String);
```


### DWS:

```pascal
procedure AddToSystemJournal(Param1 : AnyType; [..ParamN]);
```
<br>

DWS\Pascal Script Example:
```pascal
procedure MessengerEventHandler(Sender : TMessenger; SenderNickName : String; SenderId, ChatId : String; EventMsg : String; EventCode : Byte);
begin       
  case EventCode of
    0 : AddToSystemJournal(Sender.MessengerName + ' Connected');
    1 : AddToSystemJournal(Sender.MessengerName + ' Disconnected');
    2 : begin
          AddToSystemJournal(Sender.MessengerName + ' Message incoming from "' + SenderNickName + '" (SenderId: ' + SenderId + '), ChatID:  ' + ChatId + ' :' + EventMsg);
        end;
    3 : AddToSystemJournal(Sender.MessengerName + ' Error raised : ' + EventMsg);
  end;
end;          


Begin
  SetEventProc(evMessengerEvent, 'MessengerEventHandler');
 
 if not ViberMessenger.Connected then
  begin
    ViberMessenger.Token := 'your_token_here';
    ViberMessenger.Connected := True;
  end;
end.
```

DWS Example:
```pascal
type Tavc = record
			 aaa : Word;
			 vv : String;
			 cc : Integer;
			 tttt : String;
			 axd : Integer;
			end;
			
     TTestClass = class
      class var z : Word;
      ffff : byte;
      constructor Create (aa : Byte);
      begin
        ffff := aa;
      end;
     end;

    tmyenum = (a_aa,a_bb,a_cc);
    tmyset = set of tmyenum; 


var kk : TStringList;
    c : Tavc;
    inf : TAboutStealth;
    v : TTestClass;

Begin
//Stringify array of String
  AddToSystemJournal(GlobalChatChannelsList);  

//Stringify Object, created from script (TStringList)
  kk := TStringList.Create;
  kk.Add('Test1');
  kk.Add('Test2');
  AddToSystemJournal('kk= ',kk);
  kk.Free;

//Stringify Stealth object
AddToSystemJournal('ViberMessenger=',ViberMessenger);

//Stringify script class with class var
TTestClass.z := 654;
cl := TTestClass.Create(5);
AddToSystemJournal(cl);


//Stringify script record
  c.aaa = 999;
  c.vv := '889';
  c.tttt := 'Test';
  AddToSystemJournal(c);  

//Stringify record, received from Stealth
  AddToSystemJournal(StealthInfo);

//Stringify array of record, received from Stealth
  AddToSystemJournal(GetMenuItems('Equipment'));

//Stringify set from script
  h := [a_aa,a_bb];
  AddToSystemJournal(h);

//etc, etc. 
end.
```


### DWS vs Pascal script:

```pascal
var i : Integer;
    TL : TStringList;
begin
  {$IFDEF DWSCRIPT}
  AddToSystemJournal(GlobalChatChannelsList);
  {$ELSE}  //Pascal Script
  TL := TStringList.Create;
  GlobalChatChannelsList(TL);
  if TL.Count > 0 then
    for i := 0 to TL.Count - 1 do
      AddToSystemJournal(TL[i]);
  TL.Free;
{$ENDIF}
```


### Python:

```python
def AddToSystemJournal(*args, **kwargs)
```
