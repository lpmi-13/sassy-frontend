import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface Props {
    href: string;
    text: string;
}

// this is an ugly hack since I needed to force escape from the react-router
const CustomButtonWithReload = ({ href, text }: Props): JSX.Element => {
    const theme = useTheme();

    return (
        <a href={href}>
            <Button
                component="a"
                color="primary"
                variant="text"
                sx={{
                    color: theme.palette.text.primary,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
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
        </a>
    );
};

export default CustomButtonWithReload;
