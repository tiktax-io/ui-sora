import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'
import { TextProps } from './Text.types'
import { createUseStyles } from 'react-jss'
import { danger, fontFamily, typography_base, typography_ratio } from '../_styles'

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'radio',
      options: [ -3, -2, -1, 0, 1, 2, 3, 4, 5 ]
    },
    weight: {
      control: 'radio',
      options: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
    }
  }
} as ComponentMeta<typeof Text>

/******************************************************************************
 * Object containing strings as values with demo text.
 *****************************************************************************/
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

const loreIpsumText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const ScaleTemplate: ComponentStory<typeof Text> = () => {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      fontFamily: fontFamily,
      fontSize: typography_base,
      gap: '20px',
      height: '100%',
      left: 0,
      maxWidth: '1200px',
      top: 0,
      width: '100%'
    },
    row: {
      display: 'flex',
      height: 'auto',
      width: '100%'
    },
    text: {
      alignItems: 'center',
      display: 'flex',
      width: '100%'
    },
    measureUnit: {
      alignItems: 'center',
      display: 'flex',
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
          size
        </div>
        <div className={classes.measureUnit}>
          em
        </div>
        <div className={classes.measureUnit}>
          px
        </div>
      </div>
      {arrayOftexts.map((text, i) => (
        <div key={i} className={classes.row}>
          <div className={classes.text}>
            <Text size={5 - i}>
              {text}
            </Text>
          </div>
          <div className={classes.measureUnit}>
            {5 - i}
          </div>
          <div className={classes.measureUnit}>
            {Math.pow(typography_ratio, 5 - i).toFixed(2)}
          </div>
          <div className={classes.measureUnit}>
            {(typography_base * (Math.pow(typography_ratio, 5 - i))).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

const Template: ComponentStory<typeof Text> = (args: TextProps) =>
  <Text {...args}>
    {demoText[args.size || 0]}
  </Text>

const ParagraphTemplate: ComponentStory<typeof Text> = (args: TextProps) =>
  <Text {...args}>
    {loreIpsumText}
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
 * @returns {ReactElement<HTMLParagraphElement>} Paragraph element containing
 * the text "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
export const Paragraph = ParagraphTemplate.bind({})

/******************************************************************************
 * Specified the color of the text
 * @returns {ReactElement<HTMLSpanElement>} Span element containing the
 * text "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
export const CustomColor = Template.bind({})

/******************************************************************************
 * Specified the weight of the text
 * @returns {ReactElement<HTMLSpanElement>} Span element containing the
 * text "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
export const WeightedText = Template.bind({})

/******************************************************************************
 * Can be customized without limits passing CSS properties via "css" prop.
 * @returns {ReactElement<HTMLSpanElement>} Span element containing the
 * text "Base text like paragraphs and data displayed on tables"
 *****************************************************************************/
export const CustomCSS = Template.bind({})

Paragraph.args = {
  element: 'paragraph'
}

CustomColor.args = {
  color: danger
}

WeightedText.args = {
  weight: 700
}

CustomCSS.args = {
  css: {
    opacity: 0.4,
    textDecoration: 'underline'
  }
}
