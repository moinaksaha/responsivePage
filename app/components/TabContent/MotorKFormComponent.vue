<template>
    
    <form id="form-partecipate" name="form-partecipate" action="/" method="POST"
        @submit.prevent="validateFormData" novalidate="true">

        <h2 class="heading heading--sec heading--branded">Participate now!</h2>

        <div class="form__row layout palm-layout--stacked" role="group">

            <input 
                placeholder="Name" 
                name="name" 
                type="text" 
                class="form__el layout__item" 
                required
                v-model="formData.firstName"
            >

            <input 
                placeholder="Surname" 
                name="surname" 
                type="text" 
                class="form__el layout__item" 
                required
                v-model="formData.lastName"
            >
            
            <input 
                placeholder="E-mail" 
                name="email" 
                type="email" 
                class="form__el layout__item" 
                required
                v-model="formData.emailID"
            >

        </div>

        <div class="form__row layout palm-layout--stacked" role="group">
            
            <input 
                placeholder="Phone" 
                name="phone" 
                type="tel" 
                class="form__el layout__item" 
                required
                v-model="formData.phoneNumber"
            >

            <select 
                name="state" 
                id="state" 
                class="form__el layout__item"
                v-model="formData.selectState"
            >
                <option value="-">Select your state</option>
                <option value="0">State 1</option>
                <option value="1">State 2</option>
                <option value="2">State 3</option>
                <option value="3">State 4</option>
            </select>

            <div class="layout__item">

                <div class="layout">

                    <select 
                        required 
                        aria-label="Day" 
                        name="birthday-day" 
                        id="day" title="Day" 
                        class="form__el layout__item"
                        v-model="formData.selectDay">

                            <option value="0">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>

                    </select>

                    <select 
                        required aria-label="Month" 
                        name="birthday-month" 
                        id="month" 
                        title="Month" 
                        class="form__el layout__item mh"
                        v-model="formData.selectMonth">

                            <option value="0">Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>

                    </select>

                    <select 
                        required 
                        aria-label="Year" 
                        name="birthday-year" 
                        id="year" 
                        title="Year" 
                        class="form__el layout__item"
                        v-model="formData.selectYear">
                            <option value="0">Year</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                    </select>

                </div>

            </div>

        </div>

        <div class="form__row layout palm-layout--stacked" role="group">

            <div class="layout__item">

                <input 
                    placeholder="Project name" 
                    name="project-name" 
                    type="text" 
                    class="form__el mb"
                    v-model="formData.projectName">

                <select 
                    name="project-category" 
                    id="project-category" 
                    class="form__el mb"
                    v-model="formData.selectCategory">
                        <option value="-">Select a category</option>
                        <option value="pro">Pro</option>
                        <option value="amateur">Amateur</option>
                </select>

                <progress class="form__upload"></progress>

                <label class="form__el" for="project-upload">
                    Upload your file (.jpg/.jpeg/.png)
                    <input 
                        type="file" 
                        name="project-upload" 
                        id="project-upload" 
                        accept=".jpg,.jpeg,.png" 
                        class="hidden">
                </label>

            </div>

            <textarea 
                placeholder="Project description" 
                maxlength="1000" 
                name="project-desc" 
                id="project-desc" 
                class="form__el layout__item"
                v-model="formData.projectDescription">
            </textarea>

            <div class="layout__item">

                <div class="layout layout--stacked">

                    <input 
                        name="read-rules" 
                        id="read-rules" 
                        type="checkbox"
                        v-model="formData.readRulesCheck">

                    <label for="read-rules" class="checkbox mb">
                        <span class="checkbox__text">
                            <a href="" class="link__deco">I read the lorem ipsum</a>
                        </span>
                    </label>

                    <input 
                        name="read-privacy" 
                        id="read-privacy" 
                        type="checkbox" 
                        required
                        v-model="formData.readPrivacyCheck">

                    <label for="read-privacy" class="checkbox mb">
                        <span class="checkbox__text">
                            <button id="js-showprivacy" class="link__deco">I read the privacy policy*</button>
                        </span>
                    </label>

                    <aside id="privacy-info" class="privacy">

                        <h1 class="privacy__heading">Privacy 13 D.Lgs. 196/2003</h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam atque culpa, laborum, nam nisi placeat praesentium reiciendis.
                        </p>

                    </aside>

                    <div class="btn-wrapper">

                        <button 
                            type="submit" 
                            id="js-send-form" 
                            class="btn btn--main btn--full">
                                Submit
                        </button>

                    </div>

                    <div>

                        <p v-if="errors.length">
                            <b>Please fix the following error(s):</b>
                            <ul>
                                <li v-for="(error, i) in errors" v-bind:key="i">{{ error }}</li>
                            </ul>
                        </p>

                    </div>

                </div>

            </div>
        
        </div>
        
    </form>

</template>

<script>
export default {
    name: 'MotorKFormComponent',
    data(){
        return {
            errors:[],
            formData: {
                selectDay: '0',
                selectMonth: '0',
                selectYear: '0',
                selectCategory: '-',
                selectState: '-'
            }
        }
    },
    methods: {
        validateFormData: function(){
            this.errors = [];

            if(!(this.formData.firstName && this.formData.firstName.trim())){
                this.errors.push("First Name is required.");
            }

            if(!(this.formData.lastName && this.formData.lastName.trim())){
                this.errors.push("Last Name is required.");
            }

            if(!this.formData.emailID){
                this.errors.push("Email ID is required.")
            }else{
                this.validEmail(this.formData.emailID);
            }

            if(!(this.formData.phoneNumber && this.formData.phoneNumber.trim())){
                this.errors.push("Phone Number is required.");
            }else{
                this.validatePhone(this.formData.phoneNumber);
            }

            if(!(  this.formData.selectDay!="0" 
                && this.formData.selectMonth!="0"  
                && this.formData.selectYear!="0" )
            ){
                this.errors.push("Please select a valid date with Day, Month and Year.");
            }

            if(!this.formData.readPrivacyCheck){
                this.errors.push("Please read our privacy policies ")
            }


            // var testData = {
            //     firstName:"dwcefw", //
            //     emailID:"aa@gg.com", //
            //     lastName:"ewfwewf", //
            //     phoneNumber:"23456789", //
            //     projectDescription:"i dont know",
            //     projectName:"test",
            //     readPrivacyCheck:true,
            //     readRulesCheck:true,
            //     selectCategory:"amateur",
            //     selectDay:"8",//
            //     selectMonth:"4",//
            //     selectState:"0",
            //     selectYear:"2009"//
            // }
        },
        validEmail: function(emailID){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(emailID)){
                this.errors.push("Please enter a valid Email Address.");
            }
        },
        validatePhone: function(phone){
            var phoneRegEx = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
            if(!phoneRegEx.test(phone)){
                this.errors.push("Please enter a valid Phone Number.");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout{
        @media screen and (max-width: 767px){
            display: block;
            // flex-direction: column;
        }
    }
    .form__row div.layout__item{
        div.layout{
            display: flex;
            width: calc(100% - 2px);
        }
        @media screen and (max-width: 767px){
            margin-right: 0;
            margin-bottom: 0;
        }
        .layout select.form__el{
            @media screen and (max-width: 767px){
                margin-bottom: 1em;
            }
        }
    }
    .form__row{
        input, select{
            @media screen and (max-width: 767px){
                    width: calc(100% - 2px);
            }
        }
    }
    label[for=project-upload]{
        @media screen and (max-width: 767px){
            width: calc(100% - 2px);
            position: relative;
            margin-bottom: 1em;
        }
    }

    label[for=read-rules]{
        @media screen and (max-width: 767px){
            margin-bottom: 1em;
            &::after {
                content: "";
                clear: both;
                display: table;
            }
        }
    }

    textarea#project-desc{
        @media screen and (max-width: 767px){
            width: calc(100% - 2px);
        }
    }
</style>
