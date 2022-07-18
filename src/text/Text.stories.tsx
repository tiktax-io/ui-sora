import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'
import { TextProps } from './Text.types'
import { createUseStyles } from 'react-jss'

export default {
  title: 'Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const demoText: {[index: number | string]: string} = {
  5: 'Landing header call to action',
  4: 'Exceptional titles except landing cta',
  3: 'Regular titles on pages and headers',
  2: 'Card titles and other immediate parents of base text',
  1: 'Base text that requires special attention',
  0: 'Base text like paragraphs and data displayed on tables',
  [-1]: 'Small text like picture captions and disclaimers',
  [-2]: 'Legal conditions titles and special words',
  [-3]: 'Legal conditions that are not necessary to display on normal size'
}

const ScaleTemplate: ComponentStory<typeof Text> = () => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '10px',
      height: '100%',
      left: 0,
      maxWidth: '800px',
      top: 0,
      width: '100%'
    },
    row: {
      display: 'flex',
      width: '100%'
    },
    text: {
      alignItems: 'center',
      display: 'flex',
      width: '100%'
    },
    measureUnit: {
      alignItems: 'center',
      flex: 'flexEnd',
      justifyContent: 'center',
      width: '100px'
    }
  }

  const useStyles = createUseStyles(style)
  const classes = useStyles()
  const arrayOftexts = [
    demoText[5],
    demoText[4],
    demoText[3],
    demoText[2],
    demoText[1],
    demoText[0],
    demoText[-1],
    demoText[-2],
    demoText[-3]
  ]

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.text}>
          Title
        </div>
        <div className={classes.measureUnit}>
          em
        </div>
        <div className={classes.measureUnit}>
          vmin
        </div>
        <div className={classes.measureUnit}>
          px
        </div>
      </div>
      {arrayOftexts.map((text, i) => (
        <div key={i} className={classes.row}>
          <Text size={5 - i}>
            {text}
          </Text>
        </div>
      ))}
    </div>
  )
}

const Template: ComponentStory<typeof Text> = (args: TextProps) =>
  <Text {...args}>
    {demoText[args.size || 0]}
  </Text>

/******************************************************************************
 * @returns Full scale of typography as on
 * https://www.figma.com/file/GQCJ1nVFWevddz10mxmcgP/ui-sora?node-id=860%3A999
 *****************************************************************************/
export const Scale = ScaleTemplate.bind({})

/******************************************************************************
 * Default Text component with minimal props specified.
 * @returns {ReactElement<HTMLSpanElement>} Span element containing the text
 * "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
export const Default = Template.bind({})

/******************************************************************************
 * Specified the element to be a paragraph.
 * @returns {ReactElement<HTMLSpanElement>} Paragraph element containing the
 * text "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
 export const Paragraph = Template.bind({})

/* Primary.parameters = {
  backgrounds: { default: 'dark' }
} */

/* Default.args = {
  size:
} */

Paragraph.args = {
  element: 'paragraph'
}

/* export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Text',
  variant: TextVariants.secondary
} */
