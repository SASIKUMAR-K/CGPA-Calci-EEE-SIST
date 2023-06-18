subjects = [
	[
		'Fundamentals of Python Programming',
		'Electronic Devices',
		'Technical English',
		'Engineering Drawing',
		'Engineering Mathematics - I',
		'Physics for Engineers',
		'Physics Lab (Out of 50)',
		'Fundamentals OF Python Programming Lab',
	],
	[
		'Engineering Chemistry',
		'Digital Logic Circuits',
		'Circuit Theory',
		'DC Machines and Transformers',
		'Engineering Mathematics - II',
		'Electrical Circuits and Electronic Devices Lab',
		'Engineering Chemistry Lab (Out of 50)',
		'DC Machines and Transformers Lab',
	],
	[
		'Electronic Circuits',
		'Network Analysis and Synthesis',
		'Electromagnetic Theory',
		'AC Machines',
		'Solid and Fluid Mechanics',
		'Engineering Mathematics - III',
		'AC Machines Lab',
		'Electronic Circuits Lab',
	],
	[
		'Industry 4.0 for Electrical Engineers',
		'Universal Human Values',
		'Programming with C and C++',
		'Power Electronics',
		'Transmission and Distribution',
		'Elective - I',
		'Engineering Mathematics - IV',
		'Programming in C and C++ Lab',
		'Power Electronics and Electrical Vehicle Lab',
	],
	[
		//for 5th semester
	],
	[
		//for 6th semester
	],
	[
		//for 7th semester
	],
	[
		//for 8th semester
	],
];

credits = [
	[3, 3, 3, 3, 3, 4, 2, 1],
	[3, 3, 3, 3, 3, 1, 2, 2],
	[3, 3, 3, 3, 3, 3, 2, 2],
	[2, 3, 3, 3, 3, 3, 3, 2, 2],
	[
		//for 5th semester
	],
	[
		//for 6th semester
	],
	[
		//for 7th semester
	],
	[
		//for 8th semester
	],
];

const semester = document.getElementsByName('semester');
const resultForm = document.querySelector('.resultForm');
const result = document.querySelector('.resultAns');

function cgpa() {
	showForm(1);
}
function gpa() {
	showForm(2);
}

function showForm(pa) {
	for (i = 0; i < semester.length; i++) {
		if (semester[i].checked) {
			const selected = parseInt(semester[i].value);
			resultForm.innerHTML = '';
			if (pa == 2 && selected <= 4) {
				if (selected == 0) {
					alert('Please Select the Semester');
					return;
				} else {
					const arrlen = subjects[selected - 1].length;
					const showFormDiv = document.createElement('div');
					const showFormHeader = document.createElement('div');
					showFormHeader.innerHTML = 'Enter Your Marks';
					showFormHeader.setAttribute('class', 'formHeader enterYourMarks');
					showFormDiv.appendChild(showFormHeader);
					for (j = 0; j < arrlen; j++) {
						const lab = document.createElement('label');
						const inp = document.createElement('input');
						const bre = document.createElement('br');
						inp.setAttribute('type', 'text');
						inp.setAttribute('id', subjects[selected - 1][j]);
						inp.setAttribute('class', 'marksInput');
						inp.setAttribute('required', 'required');
						lab.setAttribute('for', subjects[selected - 1][j]);
						lab.innerHTML = subjects[selected - 1][j];
						showFormDiv.appendChild(lab);
						showFormDiv.appendChild(bre);
						showFormDiv.appendChild(inp);
						showFormDiv.appendChild(bre);
					}
					const calculateBtn = document.createElement('input');
					calculateBtn.setAttribute('type', 'submit');
					calculateBtn.setAttribute('class', 'btn');
					calculateBtn.setAttribute('onclick', 'calculate()');
					calculateBtn.setAttribute('value', 'Calculate');
					showFormDiv.appendChild(calculateBtn);
					resultForm.classList.add('showForm');
					resultForm.prepend(showFormDiv);
				}
			} else if (pa == 1 && selected <= 4) {
				if (selected == 0) {
					alert('Please Select the Semester');
					return;
				} else {
					const subjectsr = [...subjects].slice(0, selected).reverse();
					const calculateBtn = document.createElement('input');
					calculateBtn.setAttribute('type', 'submit');
					calculateBtn.setAttribute('class', 'btn');
					calculateBtn.setAttribute('onclick', 'calculate()');
					calculateBtn.setAttribute('value', 'Calculate');
					resultForm.prepend(calculateBtn);
					for (j = 0; j < selected; j++) {
						const arrlen = subjectsr[j].length;
						const showFormDiv = document.createElement('div');
						const semesterHeader = document.createElement('p');
						semesterHeader.setAttribute('class', 'semesterHeader');
						semesterHeader.innerHTML = 'Semester - ' + (selected - j);
						showFormDiv.appendChild(semesterHeader);
						for (k = 0; k < arrlen; k++) {
							const lab = document.createElement('label');
							const inp = document.createElement('input');
							const bre = document.createElement('br');
							inp.setAttribute('type', 'text');
							inp.setAttribute('id', subjectsr[j][k]);
							inp.setAttribute('class', 'semester' + (j + 1));
							lab.setAttribute('for', subjectsr[j][k]);
							lab.innerHTML = subjectsr[j][k];
							showFormDiv.appendChild(lab);
							showFormDiv.appendChild(bre);
							showFormDiv.appendChild(inp);
							showFormDiv.appendChild(bre);
						}
						resultForm.prepend(showFormDiv);
					}
					const showFormHeader = document.createElement('div');
					showFormHeader.innerHTML = 'Enter Your Marks';
					showFormHeader.setAttribute('class', 'formHeader');
					resultForm.classList.add('showForm');
					resultForm.prepend(showFormHeader);
				}
			} else {
				alert('please select 4th or below Semester');
				return;
			}
		}
	}
}

function calculate() {
	for (i = 0; i < semester.length; i++) {
		if (semester[i].checked) {
			const selected = parseInt(semester[i].value);
			if (document.getElementsByClassName('semesterHeader').length > 0) {
				const markFull = [];
				for (j = 0; j < selected; j++) {
					var marksemtemp = document.getElementsByClassName(
						'semester' + (j + 1)
					);
					var marksem = [];
					for (k = 0; k < marksemtemp.length; k++) {
						marksem.push(marksemtemp[k].value);
					}
					markFull.push(marksem);
				}
				const newCredits = [...credits].slice(0, selected);
				markFull.reverse();
				const semgpa = [];
				const grade = [];
				for (j = 0; j < newCredits.length; j++) {
					var flag = true;
					const gradeTemp = [];
					for (l = 0; l < markFull[j].length; l++) {
						var temp = markFull[j][l];
						console.log(temp);
						if ((j + 1 == 2 || j + 1 == 1) && l == 6) {
							if (markFull[j][6] >= 0 && markFull[j][6] <= 50) {
								temp = markFull[j][6] * 2;
							} else {
								alert('Please enter the mark Properly');
								var flag = false;
								return;
							}
						}

						if (temp >= 0 && temp <= 100 && temp != '') {
							if (temp >= 90) {
								gradeTemp.push(10);
							} else if (temp >= 80) {
								gradeTemp.push(9);
							} else if (temp >= 70) {
								gradeTemp.push(8);
							} else if (temp >= 60) {
								gradeTemp.push(7);
							} else if (temp >= 50) {
								gradeTemp.push(6);
							} else {
								gradeTemp.push(0);
							}
						} else {
							alert('Please enter the mark Properly');
							var flag = false;
							return;
						}
					}
					grade.push(gradeTemp);
				}
				var numeratorCgpa = 0;
				var creditSumCgpa = 0;
				for (j = 0; j < newCredits.length; j++) {
					if (flag) {
						let creditSum = 0;
						newCredits[j].forEach((element) => {
							creditSum += element;
							creditSumCgpa += element;
						});
						let numerator = 0;
						for (k = 0; k < markFull[j].length; k++) {
							numerator += grade[j][k] * newCredits[j][k];
							numeratorCgpa += grade[j][k] * newCredits[j][k];
						}
						console.log(grade[j]);
						console.log(newCredits[j]);
						console.log(numerator);
						const gpa = numerator / creditSum;
						semgpa.push(gpa);
					}
				}
				result.innerHTML = '';
				var cgpa = numeratorCgpa / creditSumCgpa;
				for (o = 0; o < semgpa.length; o++) {
					sempa = document.createElement('p');
					sempa.setAttribute('class', 'cgpaDiscription');
					sempa.innerHTML =
						'Semester ' + (o + 1) + ' GPA is ' + semgpa[o].toFixed(2);
					result.appendChild(sempa);
				}
				result.classList.add('result');
				result.prepend('Your CGPA is ' + cgpa.toFixed(2));
				alert(
					'Your CGPA is ' +
						cgpa.toFixed(2) +
						' End of ' +
						selected +
						' Semester'
				);
			} else {
				const newCredits = credits[selected - 1];
				const marks = document.querySelectorAll('.marksInput');
				const grade = [];
				var flag = true;
				for (l = 0; l < marks.length; l++) {
					var temp = marks[l].value;
					if ((selected == 2 || selected == 1) && l == 6) {
						if (marks[6].value >= 0 && marks[6].value <= 50) {
							temp = marks[6].value * 2;
						} else {
							alert('Please enter the mark Properly');
							var flag = false;
							return;
						}
					}

					if (temp >= 0 && temp <= 100 && temp != '') {
						if (temp >= 90) {
							grade.push(10);
						} else if (temp >= 80) {
							grade.push(9);
						} else if (temp >= 70) {
							grade.push(8);
						} else if (temp >= 60) {
							grade.push(7);
						} else if (temp >= 50) {
							grade.push(6);
						} else {
							grade.push(0);
						}
					} else {
						alert('Please enter the mark Properly');
						var flag = false;
						return;
					}
				}
				if (flag) {
					let creditSum = 0;
					newCredits.forEach((element) => {
						creditSum += element;
					});
					let numerator = 0;
					for (j = 0; j < marks.length; j++) {
						numerator += parseInt(grade[j]) * newCredits[j];
					}
					const gpa = numerator / creditSum;
					result.classList.add('result');
					result.innerHTML = 'Your GPA is ' + gpa.toFixed(2);
					alert('Your GPA is ' + gpa.toFixed(2));
				}
			}
		}
	}
}
