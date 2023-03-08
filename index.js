
    function Result(){
    
        var num1=document.getElementById('display').value
        var num2=eval(num1);
        document.getElementById('display').value=num2;
    }

    function Clear(){
        var inp = document.getElementById('display');
        inp.value = '';
    }

    function Back(){
        var ev=document.getElementById('display');
        ev.value=ev.value.slice(0,-1);
    }

    function Solve(val){
        var v = document.getElementById('display');
        v.value += val;
    }
    
    function Sqrt(){
        var n1 = document.getElementById('display').value;
        var n2=Math.sqrt(n1);
        document.getElementById('display').value=n2;
    }

    function Square(){
        var p= document.getElementById('display').value;
        var q=Math.pow(p,2);
        document.getElementById('display').value=q;
    }
