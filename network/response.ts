import express, { Request, Response } from "express";

exports.success = (
  req: Request,
  res: Response,
  message: any,
  status: number
) => {
  res.status(status || 200).send(message);
};

exports.error = (
  req: Request,
  res: Response,
  message: any,
  status: number,
  details: any
) => {
  console.error("[response error] ", details);

  res.status(status || 500).send(message);
};
