import React from 'react';
import styles from './AddVehicle.module.css';

const AddVehicle = () => {


    return (
        <div className={styles.AddVehicle}>
            <p>Navigation</p>
            <form>
                <label>Name of Vehicle</label>
                <input type="text" value="" placeholder="Enter Vehicle Name" />
                <label>Category</label>
                <select>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>Suv</option>
                    <option>Jeep</option>
                    <option>Truck</option>
                </select>
                <label>Model</label>
                <select>
                    <option>Base model</option>
                    <option>Full option</option>
                </select>
                <label>Specifications</label>
                <textarea value="" placeholder="Specifications" />
                <label>Other Details</label>
                <textarea value="" placeholder="Enter Extra Details(if any)" />
                <label>price</label>
                <input type="text" value="" placeholder="Enter Amount of this varient" />
                <button>ADD</button>
            </form>
        </div>
    );
}

export default AddVehicle;