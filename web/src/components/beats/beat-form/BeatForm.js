import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as beatsService from '../../../services/beat-service';
import Select from 'react-select';
import categories from '../../../data/categories';

function BeatForm() {
  const { register, handleSubmit, setError, control, watch, formState: { errors, isValid } } = useForm({ mode: 'onTouched' });
  console.log('categories', watch('categories'));

  const handleCreateBeatSubmit = (data) => {
    console.log(data);
    beatsService.createBeat(data)
      .then(beat => console.log('Todo bien majo', beat))
      .catch(error => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors)
            .forEach((error) => {
              setError(error, {  message: errors[error].message })
            })
        }
      })
  }

  return (
    <form onSubmit={handleSubmit(handleCreateBeatSubmit)}>
      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
        <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`} placeholder="Beat title..." 
          {...register('title', { 
            required: 'Title is required', 
            // maxLength: { value: 5, message: 'Title must be <= 100 chars' }
          })} />
        {errors.title && (<div className="invalid-feedback">{errors.title.message}</div>)}
      </div>


      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
        <input type="text" className={`form-control ${errors.thumbnail ? 'is-invalid' : ''}`} placeholder="Beat thumbnail..."
          {...register('thumbnail', {
            required: 'Thumbnail is required',
            validate: (value) => {
              try {
                new URL(value);
                return true;
              } catch (error) {
                return 'URL is not valid';
              }
            }
          })} />
        {errors.thumbnail && (<div className="invalid-feedback">{errors.thumbnail.message}</div>)}
      </div>
        

      <div className="input-group mb-1">
        <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
        <textarea className="form-control" 
          {...register('description', {
            required: 'Description is required'
          })}
        />
      </div>


      <Controller 
        name="categories"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <div className="input-group mb-1">
            <span className="input-group-text"><i className='fa fa-list fa-fw'></i></span>
            <Select className='form-control p-0' 
              value={categories.find((category) => category.value === value)} 
              onChange={(categories) => onChange(categories.map(category => category.value))} 
              onBlur={onBlur}
              isMulti
              options={categories}
              styles={{
                control: (base) => ({
                  ...base,
                  border: 0
                })
              }}/>
            {errors.categories && (<div className="invalid-feedback">{errors.categories.message}</div>)}
          </div>
        )}
      />    

    <div className="d-grid mt-2">
        <button className="btn btn-primary" type='submit' disabled={!isValid}>Create Beat</button>
      </div>
    </form>
  )
}

export default BeatForm