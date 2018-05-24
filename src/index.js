import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import LoggedInStudent from './users/loggedInStudent/LoggedInStudent';
import CompanyAdvertisement from './companies/CompanyAdvertisement';
import store from './store/store';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './pages/login/Login';
import ProfileCompanyEditPage from './pages/profileCompanyEditPage/ProfileCompanyEditPage';
import CompanyProfile from './pages/companyProfile/CompanyProfile';
import LoggedSchoolProfile from './pages/schools/LoggedSchoolProfile';
import CompanyListingEdit from './users/companyListing/companyListingEdit/CompanyListingEdit';
import StudentProfile from './pages/StudentProfile/StudentProfile';
import CompanyLoggedInfree from './pages/companyLoggedInFree/companyLoggedInFree';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={App} />
                <Route path="/logged-in-student" component={LoggedInStudent} />
                <Route path="/company_listing_edit" component={CompanyListingEdit} />
                <Route path="/company_advertisement" component={CompanyAdvertisement} />
                <Route path="/login" component={Login} />
                <Route path="/profile_company_edit" component={ProfileCompanyEditPage} />
                <Route path="/company_profile" component={CompanyProfile} />
                <Route path="/logged-in-school-profile" component={LoggedSchoolProfile} />
                <Route path="/studentProfile" component={StudentProfile} />
                <Route path="/logged_in_company_free" component={CompanyLoggedInfree} />
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
