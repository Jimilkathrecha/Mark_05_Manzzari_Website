import React, { useState } from 'react'

export default function Addpromo() {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <body className='p-2 '>
        <div className='main-class'>

          <div className='d-flex justify-content-between'>

            <div><h2>Add Promo Code</h2></div>

            <div className='blur-text'>
              <span onClick={ToggleClass} className={isActive ? "" : "text-primary"} data-bs-toggle="card" data-bs-target="#home">Home </span>
              /
              <span onClick={ToggleClass} className={isActive ? "" : "text-primary"}> Promo Code</span>
            </div>

          </div>

          <div className='sub-class p-1 bg-white d-flex rounded' id='home'>

            <div className='div-1 w-50 p-1 d-block'>
              <div>
                <p className="mb-1 mt-2">Promo Code<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown" type="text" />
              </div>

              <div>
                <p className="mb-1 mt-2">Start Date<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown px-1" type="date" />
              </div>

              <div>
                <p className="mb-1 mt-2">No. Of Users<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown" type="number" />
              </div>

              <div>
                <p className="mb-1 mt-2">Discount<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown" type="text" />
              </div>

              <div>
                <p className="mb-1 mt-2">Max Discount Amount<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown" type="text" />
              </div>

              <div>
                <p className="mb-2 mt-2">Main image<span className='text-danger'>*</span><span className='blur-text fs-6'>(Recommended size : 80x80 pixels)</span></p>
                <label for="files" className="btn btn-primary px-2 py-1"><i className='fa-solid fa-upload btn-primery'></i> Upload</label>
                <input id="files" className="d-none" type="file" />
              </div>

              <div>
                <p className="mb-2 mt-2">Is Cashback?</p>

                <div className="checkbox-wrapper-25">
                  <input type="checkbox" />
                </div>
              </div>

              <div className='mt-3 d-flex gap-2'>
                <button className='btn btn-warning px-2 py-1'>Reset</button>
                <button className='btn btn-success px-2 py-1'>Add Promo Code</button>
              </div>

            </div>
            <div className='div-2 w-50 p-1 d-block'>

              <div>
                <p className="mb-1 mt-2">Message<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown" type="text" />
              </div>

              <div>
                <p className="mb-1 mt-2">End Date<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown px-1" type="date" />
              </div>

              <div>
                <p className="mb-1 mt-2">Minimum Order Amount<span className='text-danger'>*</span></p>
                <input className="w-100 rounded border-brown" type="text" />
              </div>

              <div>
                <p className="mb-1 mt-2">Discount Type<span className='text-danger'>*</span></p>
                <select className='w-100 py-1 rounded border-brown' name="Select" id="">
                  <option value="">Select</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>

              <div>
                <p className="mb-1 mt-2">Repeat Usage<span className='text-danger'>*</span></p>
                <select className='w-100 py-1 rounded border-brown' name="Select" id="">
                  <option value="">Select</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>

              <div>
                <p className="mb-1 mt-2">Status<span className='text-danger'>*</span></p>
                <select className='w-100 py-1 rounded border-brown' name="Select" id="">
                  <option value="">Select</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>

              <div>
                <p className="mb-2 mt-2">List Promocode?</p>

                <div className="checkbox-wrapper-25">
                  <input type="checkbox" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </body>
    </>
  )
}
