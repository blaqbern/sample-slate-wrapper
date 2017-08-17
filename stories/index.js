import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SampleSlateWrapper from '../src/components/SampleSlateWrapper'

storiesOf('SampleSlateWrapper', module)
  .add('initialized with dummy text', () => (
    <SampleSlateWrapper />
  ))
