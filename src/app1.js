import './app1.css'
import $ from 'jquery'
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
//加
$button1.on('click',() => {
    let n = parseInt($number.text())
    n += 1;
    $number.text(n)
})
//减
$button2.on('click',() => {
    let n = parseInt($number.text())
    n -= 1;
    $number.text(n)
})
//乘
$button3.on('click',() => {
    let n = parseInt($number.text())
    n *= 2;
    $number.text(n)
})
//除
$button4.on('click',() => {
    let n = parseInt($number.text())
    n /= 2;
    $number.text(n)
})
