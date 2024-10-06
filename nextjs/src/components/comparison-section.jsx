'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const investmentOptions = [
  { name: "ROI", suryosa: "15-20%", gold: "6-8%", fixedDeposit: "5-7%", mutualFunds: "8-12%", stocks: "8-12%" },
  { name: "Payback Period", suryosa: "5-7 years", gold: "No payback", fixedDeposit: "Fixed tenure", mutualFunds: "Variable", stocks: "Variable" },
  { name: "Risk", suryosa: "Minimal", gold: "Medium", fixedDeposit: "Low", mutualFunds: "High", stocks: "High" },
  { name: "Initial Investment", suryosa: "Moderate", gold: "Varies", fixedDeposit: "Low", mutualFunds: "Low-Moderate", stocks: "Low-Moderate" },
  { name: "Tax Benefits", suryosa: "Yes", gold: "No", fixedDeposit: "Yes", mutualFunds: "Yes", stocks: "Yes" },
  { name: "Liquidity", suryosa: "Low", gold: "High", fixedDeposit: "Low", mutualFunds: "Moderate", stocks: "High" },
  { name: "Environmental Impact", suryosa: "Positive", gold: "Neutral", fixedDeposit: "Neutral", mutualFunds: "Neutral", stocks: "Neutral" },
]

const getClassName = (value) => {
  if (value.includes("Minimal") || value.includes("Positive") || value.includes("15-20%") || value.includes("5-7 years")) {
    return "text-green-600  ";
  } else if (value.includes("High") || value.includes("Medium") || value.includes("No payback") || value.includes("Variable") || value.includes("Low")) {
    return "text-red-600  ";
  }
  return " ";
};

export function ComparisonSectionComponent() {
  return (
    (<div className="container mx-auto px-4 py-12 myfont">
      <h2 className="text-sm text-center text-blue-600 mb-2">Investment Comparison</h2>
      <h1 className="text-3xl font-bold text-center mb-8">
        Why SURYOSA is the Best Choice
      </h1>
      <div className="overflow-x-auto border border-gray-800 rounded-[10px] bg-white bg-opacity-25">
        <Table>
          <TableHeader>
            <TableRow className=" bgred-400">
              <TableHead className="w-[250px] text-lg text-center font-semibold border-r border-black">Criteria</TableHead>
              <TableHead className="text-center text-lg font-bold ">Gold</TableHead>
              <TableHead className="text-center text-lg  font-bold">Fixed Deposit</TableHead>
              <TableHead className="text-center text-lg  font-bold">Mutual Funds</TableHead>
              <TableHead className="text-center text-lg  font-bold">Stocks</TableHead>
              <TableHead className="text-center text-lg  font-bold bg-blue-50">SURYOSA Solar Energy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investmentOptions.map((option, index) => (
              <TableRow key={index} className="w-full text-gray-900">
                <TableCell className="font-medium border-r border-black text-lg text-black">{option.name}</TableCell>
                <TableCell className={`text-center text-lg ${getClassName(option.gold)}`}>{option.gold}</TableCell>
                <TableCell className={`text-center text-lg ${getClassName(option.fixedDeposit)}`}>{option.fixedDeposit}</TableCell>
                <TableCell className={`text-center text-lg ${getClassName(option.mutualFunds)}`}>{option.mutualFunds}</TableCell>
                <TableCell className={`text-center text-lg ${getClassName(option.stocks)}`}>{option.stocks}</TableCell>
                <TableCell className={`text-center text-lg bg-blue-50 ${getClassName(option.suryosa)}`}>{option.suryosa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>)
  );
}
