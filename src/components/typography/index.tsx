import { Typography as OriginalTypography } from 'antd';
import { withWrap } from '../../utils/hoc';

const {
  Link: OriginalLink,
  Paragraph: OriginalParagraph,
  Text: OriginalText,
  Title: OriginalTitle,
} = OriginalTypography;

const Typography = withWrap(OriginalTypography);

(Typography as any).Link = OriginalLink;
(Typography as any).Paragraph = OriginalParagraph;
(Typography as any).Text = OriginalText;
(Typography as any).Title = OriginalTitle;

export default Typography;
