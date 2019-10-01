var drink = prompt('Please advice your favorite drink (water,beer,coffee,milk,vodka)')

switch (drink){
    case 'Water':
    case 'water':
        alert('Круто! Вода - очень полезна для твоего организма . Пей больше ВОДЫ!');
        break;
        case 'Juice':
        case 'juice':
            alert('Сок - богата витаминами и аминокислотами , что в эти холодные деньки будет для тебя только лучше');
            break;
            case 'Bear':
            case 'bear':
                alert('Чрезмерное употребление алкоголя губительно для здоровья.');
                break;
                case 'Vodka':
                case 'vodka':
                    alert('Чрезмерное употребление алкоголя губительно для здоровья.')
               break;
                case 'Milk':
                case 'milk':
                    alert("Молоко - пейте больше молока");
                    break;
                    case 'Coffee':
                    case 'coffee':
                     alert('Кофе-поможет тебе проснуться');
                     break;
                     defult:
                     alert('Пожалуйста выберите напиток');
}
