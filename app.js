const data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'Computer Technician', 46200 ],
    [ 'Conservation/Environment Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'Lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical Repair Tech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]

let jobList = document.getElementById('jobList');

const g_annual = document.getElementById('g_annual');


for(job of data){
    // console.log(job[0], job[1]); 0 = Job title, 1 = Job Salary
    let elem = document.createElement('li');
    elem.innerHTML = `${job[0]} $${job[1]}`;
    elem.setAttribute("value", job[1]);
    elem.addEventListener("click", (e) => calculate(e.target));
    jobList.appendChild(elem);
}

function calculate(job) {
    salary = parseInt(job.value);
    let title = job.innerText;
    let grossMonthly =  salary / 12;
    let fedTaxes = grossMonthly * 0.12;
    let stateTaxes = grossMonthly * 0.07;
    let socialSecurity = grossMonthly * 0.062;
    let medicare = grossMonthly * 0.0145;
    let stateDisabilities = grossMonthly * 0.01;
    let retireInvestment = grossMonthly * 0.05;
    let totalDeductions = fedTaxes + stateTaxes + socialSecurity + medicare + stateDisabilities + retireInvestment + 180.00;
    g_annual.value = salary;
    document.getElementById('c_option').value = title;
    document.getElementById('g_monthly').value = grossMonthly;
    document.getElementById('f_tax').value = grossMonthly;
    document.getElementById('f_tax x 0.12').value = fedTaxes;
    document.getElementById('s_tax').value = grossMonthly;
    document.getElementById('s_tax x 0.07').value = stateTaxes;
    document.getElementById('s_sec').value = grossMonthly;
    document.getElementById('s_sec x 0.062').value = socialSecurity;
    document.getElementById('medcare').value = grossMonthly;
    document.getElementById('medcare x 0.0145').value = medicare;
    document.getElementById('s_disability').value = grossMonthly;
    document.getElementById('s_disability x 0.01').value = stateDisabilities;
    document.getElementById('r_invest').value = grossMonthly;
    document.getElementById('r_invest x 0.05').value = retireInvestment;
    document.getElementById('t_deduct').value = totalDeductions;
    document.getElementById('g_monthly_total').value = grossMonthly;
    document.getElementById('t_deduct_total').value = totalDeductions;
    document.getElementById('m_monthly_total').value = grossMonthly + totalDeductions;
    document.getElementById('t_monthly_total_house').value = grossMonthly;
}