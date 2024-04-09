//Variáveis
const expressao = "{[()()]}"

//inicio
function isBalanced(expression){
  const stack = [];
  const machingBalanced = {
    ')': '(', 
    ']': '[', 
    '}': '{'
    }

  for(let i=0; i<expression.length; i++){
    const char = expression[i]
    if (char === char === '(' || char === '[' || char === '{'){
      stack.push(char)

    }else if(char === ')' || char === ']' || char === '}'){

      if(stack.length === 0 || stack.pop() !== machingBalanced[char]){
        alert("Não está balanceado.")
        return false
      }
    }
    
  }
  return stack.length === 0;
}

//fimAlgoritmo
const result = isBalanced(expressao)
alert(result)