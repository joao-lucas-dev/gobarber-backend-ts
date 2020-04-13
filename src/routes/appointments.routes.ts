import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentRepository from '../app/repositories/AppointmentsRepository';

const appointmentsRepository = new AppointmentRepository();

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parseDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: parseDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
