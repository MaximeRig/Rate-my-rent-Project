// npm import
import React from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

// local import
import NotationFormVisiteur from 'src/containers/ApartmentRating/notationFormVisiteur';
import NotationFormLocataire from 'src/containers/ApartmentRating/notationFormLocataire';
import PlaceAutocomplete from './placesAutocomplete';
import Commentaire from './commentaire';
import InformationGenerale from './informationGenerale';

import './apartmentRating.scss';

// Component
const ApartmentRating = ({
  formSubmitFailure,
  formSubmitSuccess,
  formLoading,
  errorFormSubmit,
  address,
  isLocataire,
  isVisiteur,
  isDisplayed,
  isLocataireChange,
  isVisiteurChange,
  changeAddress,
  floorNumber,
  location,
  floorArea,
  rent,
  numberOfRooms,
  changeFloorArea,
  changeFloorNumber,
  changeLocation,
  changeNumberOfRooms,
  changeRent,
  abstractedComment,
  positiveComment,
  negativeComment,
  changeAbstractedComment,
  changePositiveComment,
  changeNegativeComment,
  submitRatingForm,
  setRedirectErrorFormSubmit,
}) => {
  const handleChange = (addressInput) => {
    changeAddress(addressInput);
  };

  const handleSelect = (addressInput) => {
    changeAddress(addressInput);
  };

  const handleLocataire = () => {
    isLocataireChange();
  };

  const handleVisiteur = () => {
    isVisiteurChange();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitRatingForm();
  };

  // if formSubmitSuccess = true > redirect to landing page
  if (formSubmitSuccess) {
    // need to set the state after form submit success
    setRedirectErrorFormSubmit();
    // redirect to landing page
    return <Redirect to="/" />;
  }

  return (
    <div className="notation-form">
      <PlaceAutocomplete
        address={address}
        handleChange={handleChange}
        handleSelect={handleSelect}
      />
      <div>
        <form className="main-form">
          <div className="information-generales">
            <h1 className="information-generales-title">Informations générales</h1>
            <div className="information-generales-radio">
              <div>
                <p>Je suis un :</p>
              </div>
              <div>
                <input checked={isLocataire} onChange={handleLocataire} className="radioButtons" type="radio" name="locataire" id="locataire" value="locataire" />
                <label className="radioLabel" htmlFor="locataire">Locataire</label>

                <input checked={isVisiteur} onChange={handleVisiteur} className="radioButtons" type="radio" name="visiteur" id="visiteur" value="visiteur" />
                <label className="radioLabel" htmlFor="visiteur">Visiteur</label>
              </div>
            </div>
            {isDisplayed && (
              <InformationGenerale
                changeFloorNumber={changeFloorNumber}
                changeLocation={changeLocation}
                location={location}
                floorNumber={floorNumber}
                floorArea={floorArea}
                rent={rent}
                numberOfRooms={numberOfRooms}
                changeFloorArea={changeFloorArea}
                changeNumberOfRooms={changeNumberOfRooms}
                changeRent={changeRent}
              />
            )}
            {isLocataire && (
              <NotationFormLocataire />
            )}
            {isVisiteur && (
              <NotationFormVisiteur />
            )}
          </div>
          {isDisplayed && (
            <Commentaire
              isDisplayed={isDisplayed}
              abstractedComment={abstractedComment}
              positiveComment={positiveComment}
              negativeComment={negativeComment}
              changeAbstractedComment={changeAbstractedComment}
              changePositiveComment={changePositiveComment}
              changeNegativeComment={changeNegativeComment}
            />
          )}
          <button className={classNames({ 'form-submit-hidden': !isDisplayed, 'form-submit': isDisplayed })} onClick={handleSubmit} type="submit">Valider l'évaluation de cet appartement</button>
          {formSubmitFailure.map(error => (
            <p key={error.propertyPath} className="failure-form-submit">{error.title}</p>
          ))}
          {errorFormSubmit && (
            <p className="error-form-submit">Veuillez remplir tous les champs s'il vous plaît</p>
          )}
          {formLoading && (
            <div className="submit-form-loading">
              <CircularProgress disableShrink />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// PropTypes validation
ApartmentRating.propTypes = {
  formSubmitSuccess: PropTypes.bool.isRequired,
  formSubmitFailure: PropTypes.array.isRequired,
  formLoading: PropTypes.bool.isRequired,
  errorFormSubmit: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  isLocataire: PropTypes.bool.isRequired,
  isVisiteur: PropTypes.bool.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  isLocataireChange: PropTypes.func.isRequired,
  isVisiteurChange: PropTypes.func.isRequired,
  changeAddress: PropTypes.func.isRequired,
  submitRatingForm: PropTypes.func.isRequired,
  setRedirectErrorFormSubmit: PropTypes.func.isRequired,
  floorNumber: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  floorArea: PropTypes.number.isRequired,
  rent: PropTypes.number.isRequired,
  numberOfRooms: PropTypes.number.isRequired,
  changeFloorArea: PropTypes.func.isRequired,
  changeFloorNumber: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  changeNumberOfRooms: PropTypes.func.isRequired,
  changeRent: PropTypes.func.isRequired,
  abstractedComment: PropTypes.string.isRequired,
  positiveComment: PropTypes.string.isRequired,
  negativeComment: PropTypes.string.isRequired,
  changeAbstractedComment: PropTypes.func.isRequired,
  changePositiveComment: PropTypes.func.isRequired,
  changeNegativeComment: PropTypes.func.isRequired,
};

export default ApartmentRating;
