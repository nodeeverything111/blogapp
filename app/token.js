var crypto=require("crypto");
var token={
    createToken:function(obj,timeout){
        console.log(parseInt(timeout)||0);
        var obj2={
            data:obj,//payload
            created:parseInt(Date.now()/1000),//token���ɵ�ʱ��ģ���λ��
            exp:parseInt(timeout)||10//token��Ч��
        };

        //payload��Ϣ
        var base64Str=Buffer.from(JSON.stringify(obj2),"utf8").toString("base64");

        //���ǩ�������۸�
        var secret="hel.h-five.com";
        var hash=crypto.createHmac('sha256',secret);
            hash.update(base64Str);
        var signature=hash.digest('base64');


        return  base64Str+"."+signature;
    },
    decodeToken:function(token){

        var decArr=token.split(".");
        if(decArr.length<2){
            //token���Ϸ�
            return false;
        }

        var payload={};
        //��payload json�ַ��� ����Ϊ����
        try{
            payload=JSON.parse(Buffer.from(decArr[0],"base64").toString("utf8"));
        }catch(e){
            return false;
        }

        //����ǩ��
        var secret="hel.h-five.com";        
        var hash=crypto.createHmac('sha256',secret);
            hash.update(decArr[0]);
        var checkSignature=hash.digest('base64');

        return {
            payload:payload,
            signature:decArr[1],
            checkSignature:checkSignature
        }
    },
    checkToken:function(token){
        var resDecode=this.decodeToken(token);
        if(!resDecode){

            return false;
        }

        //�Ƿ����
        var expState=(parseInt(Date.now()/1000)-parseInt(resDecode.payload.created))>parseInt(resDecode.payload.exp)?false:true;
        if(resDecode.signature===resDecode.checkSignature&&expState){

            return true;
        }

        return false;
    }
    
}
module.exports=exports=token;