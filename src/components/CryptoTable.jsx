import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formatNumber = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formatPercentage = (num) => {
    return `${num > 0 ? '+' : ''}${num.toFixed(2)}%`;
  };

  const getChangeColor = (value) => {
    return value >= 0 ? theme.palette.success.main : theme.palette.error.main;
  };

  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        maxWidth: '100%', 
        overflowX: 'auto',
        boxShadow: theme.shadows[2],
        '& .MuiTableCell-root': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        }
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="crypto table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            {!isMobile && <TableCell>Symbol</TableCell>}
            <TableCell>Price</TableCell>
            <TableCell>1h %</TableCell>
            <TableCell>24h %</TableCell>
            <TableCell>7d %</TableCell>
            {!isMobile && (
              <>
                <TableCell>Market Cap</TableCell>
                <TableCell>24h Volume</TableCell>
                <TableCell>Circulating Supply</TableCell>
                <TableCell>Max Supply</TableCell>
              </>
            )}
            <TableCell>7D Chart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, index) => (
            <TableRow 
              key={asset.id}
              sx={{ 
                '&:hover': { 
                  backgroundColor: theme.palette.action.hover 
                }
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <img 
                    src={asset.logo} 
                    alt={asset.name} 
                    style={{ 
                      width: 32, 
                      height: 32,
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }} 
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {asset.name}
                    </Typography>
                    {!isMobile && (
                      <Typography variant="caption" color="text.secondary">
                        {asset.symbol}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </TableCell>
              {!isMobile && <TableCell>{asset.symbol}</TableCell>}
              <TableCell>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {formatNumber(asset.price)}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={formatPercentage(asset.change1h)}
                  size="small"
                  sx={{
                    backgroundColor: getChangeColor(asset.change1h),
                    color: 'white',
                    fontWeight: 600
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={formatPercentage(asset.change24h)}
                  size="small"
                  sx={{
                    backgroundColor: getChangeColor(asset.change24h),
                    color: 'white',
                    fontWeight: 600
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={formatPercentage(asset.change7d)}
                  size="small"
                  sx={{
                    backgroundColor: getChangeColor(asset.change7d),
                    color: 'white',
                    fontWeight: 600
                  }}
                />
              </TableCell>
              {!isMobile && (
                <>
                  <TableCell>{formatNumber(asset.marketCap)}</TableCell>
                  <TableCell>{formatNumber(asset.volume24h)}</TableCell>
                  <TableCell>{formatNumber(asset.circulatingSupply)}</TableCell>
                  <TableCell>{asset.maxSupply ? formatNumber(asset.maxSupply) : '∞'}</TableCell>
                </>
              )}
              <TableCell>
                <Box sx={{ width: 120, height: 40 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={asset.chartData.map((price, index) => ({ value: price }))}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={theme.palette.primary.main}
                        strokeWidth={2}
                        dot={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: theme.palette.background.paper,
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: 8
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable; 