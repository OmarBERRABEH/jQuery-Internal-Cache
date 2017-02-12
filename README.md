# jQuery Cache Internal

is pretty function to easy retrieve and debug the  event/data  linked to  any DOM 

## How to use
 - Execute  the function with i nject the js into your html document or in debuger tools like (chrome inspecter)
 - Excetue the function GET_NODE_CACHE  withing pass node as parmeter
 
```javascript
GET_NODE_CACHE(document)
```

Output if the node is cached in internal jQuery then  the result of the function be like: 
```javascript
{
    data,
    event,
    
}
```

otherwise the function will return undefined

NB: this function is  used only in  developement  and debuger mode


Author:
Omar BERRABEH. omar.berrabeh@gmail.com