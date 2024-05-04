import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface Props {
    href: string;
    text: string;
}

const CustomButton = ({ href, text }: Props): JSX.Element => {
    const theme = useTheme();

    return (
        <Link to={href}>
            <Button
                component="a"
                color="primary"
                variant="text"
                sx={{
                    color: theme.palette.text.primary,
                    textTransform: 'uppercase',
                    mx: 1.5,
                    marginLeft: '15px',
                    '&:active': {
                        color:
                            theme.palette.mode === 'dark'
                                ? theme.palette.primary.main
                                : theme.palette.success.dark,
                    },
                    '&:hover': {
                        color:
                            theme.palette.mode === 'dark'
                                ? theme.palette.primary.main
                                : theme.palette.success.dark,
                    },
                }}
            >
                {text}
            </Button>
        </Link>
    );
};

export default CustomButton;
