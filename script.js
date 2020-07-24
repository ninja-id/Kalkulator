alert('Tugas individu PROGATE X CFDS UGM NAMA : JIHAN AFIF KELAS : E');
// definisi Variabel
let prevNumber='';
let calculationOperator='';
let currentNumber='0';


// mengganti nilai 0 menjadi angka
const inputNumber = (number)=>{
	if(currentNumber === '0'){
		currentNumber = number;
	}else{
		currentNumber += number;
	}
}

const inputOperator = (operator)=>{
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '0';
}

//menfambil angka
const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=>{
	number.addEventListener('click', (event)=>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

//Update screen
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
	calculatorScreen.value = number;
}

// memilih fungsi pada operator
const operators = document.querySelectorAll('.operator');
operators.forEach((operator)=>{
	operator.addEventListener('click', (event) =>{
		inputOperator(event.target.value);
	});
});


// Fungsi Kalkulasi
const calculate = ()=>{
	let result = '';
	switch(calculationOperator){
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
        default: return;
        break;
	}
	//menampung currentNumber ke variabel result
    currentNumber = result;
    //membuat nilai calculationOperator menjadi kosong
	calculationOperator = '';
}


//fungsi menyimpan nilai ketika '=' ditekan
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', ()=>{
	calculate();
	updateScreen(currentNumber);
});



//membuat fungsi tombol AC

const clearAll = ()=>{
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}
//fungsi menampilkan clear ke layar
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', ()=>{
	clearAll();
	updateScreen(currentNumber);
});


const decimal =document.querySelector('.decimal');
decimal.addEventListener('click',(event)=>{
    console.log(event.target.value);
})

// fungsi desimal '.'
const inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return;
    }

    currentNumber += dot;
}

//event desimal ke layar
decimal.addEventListener('click', (event)=>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});


//fungsi tombol persen
const percentages = document.querySelector('.percen');
decimal.addEventListener('click',(event)=>{
    console.log(event.target.value)
})

const inputPercentage = ()=>{
	currentNumber /= 100;
}

// event tombol persen ke layar
percentages.addEventListener('click', (event)=>{
	inputPercentage(event.target.value);
	updateScreen(currentNumber);
});

