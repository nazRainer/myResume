import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>School/University</th>
								<th>Year</th>
								<th>Result</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>UPSR - SK Sungai Setar</td>
								<td>2006-2011</td>
								<td>
									5A
								</td>
							</tr>
							<tr>
								<td>PT3 - SM Sains Kepala Batas</td>
								<td>2012-2014</td>
								<td>
									10A 1B
								</td>
							</tr>
							<tr>
								<td>SPM (Science Stream)- SM Sains Kepala Batas</td>
								<td>2015-2016</td>
								<td>
									4A+ 4A 1A-
								</td>
							</tr>
							<tr>
								<td>Foundation - Asasi UiTM Dengkil</td>
								<td>2017-2018</td>
								<td>
									CGPA: 4.00
								</td>
							</tr>
							<tr>
								<td>Degree - University Putra Malaysia</td>
								<td>2018-2022</td>
								<td>
									<tr>Semester 1- 3.950</tr>
									<tr>Semester 2- 3.458</tr>
									<tr>Semester 3- 3.808</tr>
									<tr>Semester 4- 3.600</tr>
									<tr>Semester 5- 3.625</tr>
								</td>
							</tr>
							<tr>
								<td>Malaysian University English Test (MUET)</td>
								<td>2018</td>
								<td>
									Band 4
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
