import React from 'react';

export default function Portfolios() {
  return <div>
    <div className='card'>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						<b>MY PORTFOLIO LINK</b>
					</span>
          <a
            style={{ cursor:"pointer" }}
            href={"https://drive.google.com/drive/folders/1zXh4XDRCADZMxBZYv2L9ujhddyHm9YJ1?usp=sharing"}
            onClick={() =>
              this.toggleModal("Rental Objects With Current Rent")
            }>
            My Google Drive Link
          </a>
				</div>
      </div>
  </div>;
}