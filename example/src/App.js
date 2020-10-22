import React, { useState, useEffect } from 'react'
import { InputField, TextArea, DropDownList, CheckBox, RadioButton, DataProvider, PhonePicker, DatePicker } from 'react-yii2-essentials'
import store from './store'
import { Provider } from 'react-redux'
import 'react-yii2-essentials/src/styles.module.css'
import 'react-yii2-essentials/src/App.css'
import 'react-phone-number-input/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [text, setText] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')
  const [textOutValidation, setTextOutValidation] = useState('')
  const [textOutHelpBlock, setTextOutHelpBlock] = useState('')
  const [dropdownValue, setDropdownValue] = useState({ value: '2', label: 'Test 1' })
  const [checkBoxValues, setCheckBoxValues] = useState({ '1': false, '2': true, '3': false })
  const [aloneCheckbox, setAloneCheckbox] = useState({ '1': false })
  const [radiobuttonValue, setRadiobuttonValue] = useState('2')

  useEffect(() => {
    setTimeout(() => {
      setTextOutValidation(false)
      setTextOutHelpBlock('YAY, this is outer validation, bitch!')
    }, 5000)
  })

  return (
    <Provider store={store}>
      <Router>
        <form>
          {/*<IndexDataLoader />*/}
          {/*<TableLoader />*/}
          <div style={{ 'margin': 50 }}>
            <DataProvider
              modelName={'clients'}
              models={{}}
              fields={[
                'id',
                'discount',
                'name',
                'phone_number',
                'address'
                //'updated_at',
              ]}
              labels={{
                'name': 'Имя'
              }}
              showCount={false}
              infoLabels={{}}
            />
          </div>
          <DatePicker
            style
            name={'departure_date'}
            model={'orders'}
            label={''}
            className={'main-input'}
            onChange={(event) => setDate(event)}
            value={date}
            required={true}
          />
          <InputField name={'address'} model={'clients'} label={''} class={'main-input'}
                      placeholder={'Адреса'} onChange={(event) => setText(event.target.value)}
                      value={text} validated={textOutValidation} helpBlock={textOutHelpBlock} pluginProps={{
                        type: 'password'
          }} />
          <TextArea name={'address'} model={'clients'} label={''} class={'main-input'}
                    placeholder={'Адреса'} onChange={(event) => setText(event.target.value)}
                    value={text} />
          <DropDownList name={'discount'} model={'clients'} label={''} class={'main-input'}
                        options={[
                          { value: '1', label: 'Test 1' },
                          { value: '2', label: 'Test 2' },
                          { value: '3rt', label: 'Test 3' }
                        ]}
                        placeholder={'Адреса'} onChange={(event) => setDropdownValue(event)}
                        value={dropdownValue} required={true} />
          <CheckBox name={'discount'} model={'clients'} label={''} class={'main-input'}
                    options={{ '1': 'Test1', '2': 'Test2', '3': 'Test3' }}
                    placeholder={'Адреса'} onChange={(values) => setCheckBoxValues(values)}
                    values={checkBoxValues} />
          <CheckBox name={'discount'} model={'clients'} label={''} class={'main-input'}
                    options={{ '1': 'Test Alone Guy' }}
                    placeholder={'Адреса'} onChange={(values) => setAloneCheckbox(values)}
                    values={aloneCheckbox} required={true}/>
          <RadioButton name={'discount'} model={'clients'} label={''} class={'main-input'}
                       options={{ '1': 'Test R 1', '2': 'Test R 2', '3': 'Test R 3' }}
                       placeholder={'Адреса'} onChange={(value) => setRadiobuttonValue(value)}
                       value={radiobuttonValue} />
          <PhonePicker
            name={'phone_number'}
            model={'clients'}
            label={''}
            class={'main-input'}
            onChange={(event) => setPhoneNumber(event)}
            value={phoneNumber}
          />

        </form>
      </Router>
    </Provider>
  )
}

export default App
